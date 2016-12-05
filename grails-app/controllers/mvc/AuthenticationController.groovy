package mvc

import bowlblitz.AuthService
import bowlblitz.User
import bowlblitz.commands.SignUpCommand

class AuthenticationController {
    AuthService authService

    def index() {
        render(view: "login")
    }

    def login() {
        User user = authService.authenticate(params.userid as String, params.password as String)

        if (!user) {
            flash.error = "Invalid user id or password. Please re-enter and try again."
            return redirect(controller: "authentication")
        }
        String _redirect = authService.getRedirect()

        if (_redirect) {
            authService.removeRedirect()
            redirect(url: _redirect)
        }
    }


    def signUp(SignUpCommand signUpCommand) {
        authService.signUp(signUpCommand)
        render(status: 202, text: "Check your email for instructions to complete the signup process.")
    }
}
