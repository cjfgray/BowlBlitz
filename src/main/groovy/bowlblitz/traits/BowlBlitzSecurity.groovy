package bowlblitz.traits

import bowlblitz.AuthService
import bowlblitz.User
import bowlblitz.UserService
import ctokens.TokenUser
import grails.plugin.cookie.CookieService
import grails.web.mvc.FlashScope
import org.springframework.stereotype.Component

import javax.servlet.http.HttpServletRequest

@Component
trait BowlBlitzSecurity {
    CookieService cookieService
    AuthService authService
    UserService userService

    User processRequest(HttpServletRequest request, FlashScope flash) {
        if (request['user'])
            return request['user'] as User

        String authToken = cookieService.getCookie("auth_token")
        String authHeader = request.getHeader("Authorization")

        if (!authToken && !authHeader)
            return null

        TokenUser user = authToken ? authService.validate(authToken) : authHeader ? authService.validate(authHeader) : null

        if (user != null)
            authService.setCookies(user.token)
        else {
            authService.removeCookies()
            user = null
        }

        user
    }
}