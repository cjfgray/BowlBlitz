package mvc

import bowlblitz.AuthService
import bowlblitz.User
import bowlblitz.commands.LoginCommand
import bowlblitz.commands.SignUpCommand
import ctokens.TokenUser
import grails.converters.JSON

class AuthenticationController {
    AuthService authService

    def index() {}

    def login(LoginCommand loginCommand) {
        TokenUser user = authService.authenticate(loginCommand) as TokenUser

        println((user as JSON).toString(true))

        if (!user) {
            flash.error = "Invalid user id or password. Please re-enter and try again."
            return redirect(controller: "authentication", action: "index")
        }
//        String _redirect = authService.getRedirect()

        authService.setCookies(user.token)
//        if (_redirect) {
//            authService.removeRedirect()
//            redirect(url: _redirect)
//        }
        render status: 200
    }


    def signUp(SignUpCommand signUpCommand) {
        authService.signUp(signUpCommand)
        render(status: 202, text: "Check your email for instructions to complete the signup process.")
    }
}
