package bowlblitz

import grails.converters.JSON

class BaseController {

    def Ok(Closure closure) {
        render status: 200, text: closure.call() as JSON
    }

    def NoContent(Closure closure) {
        closure.call()
        render status: 204
    }
}
