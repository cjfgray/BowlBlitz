package interceptors

import bowlblitz.User
import bowlblitz.UserService
import bowlblitz.traits.BowlBlitzSecurity
import ctokens.TokenUser
import grails.artefact.Interceptor
import groovy.transform.CompileStatic

@CompileStatic
class GlobalInterceptor implements Interceptor, BowlBlitzSecurity {
    int order = LOWEST_PRECEDENCE

    UserService userService

    GlobalInterceptor() { matchAll().excludes(controller: "authentication") }

    boolean before() {
        header("Allow", "GET, HEAD, POST, PUT, DELETE, TRACE, PATCH, OPTIONS")
        header("Access-Control-Allow-Headers", "origin, authorization, accept, content-type, x-requested-with")
        header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, TRACE, PATCH, OPTIONS")
        header("Access-Control-Max-Age", "3600")
        header("Access-Control-Allow-Origin", "*")
        header("Access-Control-Allow-Credentials", "true")

        TokenUser tu = processRequest(request, flash)
        User user = userService.findByEmail(tu.user.email as String)

        if (!user) {
            render(status: 401)
            return false
        }

        request['user'] = user
        true
    }

    boolean after() {
        true
    }

    void afterView() {
        // no-op
    }
}
