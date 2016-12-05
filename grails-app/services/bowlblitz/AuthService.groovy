package bowlblitz

import bowlblitz.commands.LoginCommand
import bowlblitz.commands.SignUpCommand
import bowlblitz.exceptions.DuplicateException
import bowlblitz.traits.BowlBlitzConfig
import com.fasterxml.jackson.databind.ObjectMapper
import ctokens.TokenUser
import grails.core.GrailsApplication
import grails.plugin.cookie.CookieService
import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse
import grails.transaction.Transactional

@Transactional
class AuthService implements BowlBlitzConfig {
    UserService userService
    CookieService cookieService
    RestBuilder restBuilder = new RestBuilder()
    ObjectMapper mapper = new ObjectMapper()

    TokenUser validate(String token) {
        RestResponse resp = restBuilder.get("$ctokensUrl/authenticate/$token")
        if (resp.status == 401)
            throw new Exception("Session has expired")

        if (!resp.statusCode.is2xxSuccessful())
            throw new Exception(resp.$text)

        mapper.readValue(resp.text, TokenUser)
    }

    TokenUser authenticate(LoginCommand loginCommand) {
        RestResponse resp = restBuilder.post("$ctokensUrl/authenticate") {
            contentType 'application/json'
            json {
                email = loginCommand.email
                password = loginCommand.password
            }
        }

        if (resp.status == 401)
            throw new Exception("Unauthorized")
        else if (!resp.statusCode.'2xxSuccessful')
            throw new Exception(resp.text)

        mapper.readValue(resp.text, TokenUser)
    }

    User signUp(SignUpCommand signUpCommand) {
        if (User.findByEmail(signUpCommand.email))
            throw new DuplicateException("User already exists with email, ${signUpCommand.email}")

        if (addUsertotokenService(signUpCommand))
            new User(email: signUpCommand.email, firstName: signUpCommand.firstName, lastName: signUpCommand.lastName).save(flush: true)
    }

    def addUsertotokenService(SignUpCommand signUpCommand) {
        RestResponse resp = restBuilder.post("$ctokensUrl/users") {
            contentType "application/json"
            json {
                email = signUpCommand.email
                password = signUpCommand.password
                firstName = signUpCommand.firstName
                lastName = signUpCommand.lastName
            }
        }
        resp.statusCode.'2xxSuccessful'
    }

    void invalidate(User user) {
        if (!user)
            return

        dtsClient.invalidate(user.token)
        user?.token = null
        user?.save(flush: true)
    }

    void setRedirect(String url) { cookieService.setCookie(name: "redirect", value: url) }

    String getRedirect() { cookieService.getCookie("redirect") }

    void removeRedirect() { cookieService.deleteCookie("redirect") }

    void setCookies(String token) { cookieService.setCookie(name: "auth_token", value: token, path: "/") }

    void removeCookies() {
        cookieService.deleteCookie("auth_token", "/")
    }
}
