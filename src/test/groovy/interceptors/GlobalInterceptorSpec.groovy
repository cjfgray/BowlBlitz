package interceptors


import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(GlobalInterceptor)
class GlobalInterceptorSpec extends Specification {

    def setup() {
    }

    def cleanup() {

    }

    void "Test global interceptor matching"() {
        when:"A request matches the interceptor"
            withRequest(controller:"global")

        then:"The interceptor does match"
            interceptor.doesMatch()
    }
}
