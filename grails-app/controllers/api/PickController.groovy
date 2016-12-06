package api

import bowlblitz.BaseController
import bowlblitz.PickService
import bowlblitz.User
import bowlblitz.commands.PickCommand

class PickController extends BaseController {
    PickService pickService

    def list(int season) {
        Ok {
            pickService.list(season, request.user as User)
        }
    }

    def updatePicks() {
        NoContent {
            pickService.updatePicks(request.JSON as List<Map<String, Integer>>, request.user as User)
        }
    }
}
