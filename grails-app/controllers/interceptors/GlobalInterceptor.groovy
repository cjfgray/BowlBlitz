package interceptors

import bowlblitz.User
import bowlblitz.traits.BowlBlitzSecurity
import grails.artefact.Interceptor
import groovy.transform.CompileStatic

@CompileStatic
class GlobalInterceptor implements Interceptor, BowlBlitzSecurity {
    int order = LOWEST_PRECEDENCE

    GlobalInterceptor() { matchAll().excludes(controller: "authentication") }

    boolean before() {
        header("Allow", "GET, HEAD, POST, PUT, DELETE, TRACE, PATCH, OPTIONS")
        header("Access-Control-Allow-Headers", "origin, authorization, accept, content-type, x-requested-with")
        header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, TRACE, PATCH, OPTIONS")
        header("Access-Control-Max-Age", "3600")
        header("Access-Control-Allow-Origin", "*")
        header("Access-Control-Allow-Credentials", "true")

        println "GLOBAL INTERCEPTOR"

        User user = processRequest(request, flash)
        if (!user) {
            render(status: 401, text: "")
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
