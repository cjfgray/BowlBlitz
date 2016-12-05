package api

import bowlblitz.PickService
import bowlblitz.User
import bowlblitz.commands.PickCommand

class PickController {
    PickService pickService

    def updatePicks(List<PickCommand> picks) {
        pickService.updatePicks(picks, request.user as User)
    }
}
