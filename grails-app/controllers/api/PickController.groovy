package api

import bowlblitz.BaseController
import bowlblitz.PickService
import bowlblitz.User
import bowlblitz.commands.PickCommand

class PickController extends BaseController {
    PickService pickService

    def list(int season) {
        Ok {
            pickService.list(request.user as User, season)
        }
    }

    def updatePicks(List<PickCommand> picks) {
        NoContent {
            pickService.updatePicks(picks, request.user as User)
        }
    }
}
