package api

import bowlblitz.BaseController
import bowlblitz.BowlService
import bowlblitz.commands.BowlCommand

class BowlController extends BaseController {
    BowlService bowlService

    def listSeason() {
        Ok { bowlService.listSeason(params.season as String) }
    }

    def create(BowlCommand bowlCommand) {
        Ok { bowlService.create(bowlCommand) }
    }
}
