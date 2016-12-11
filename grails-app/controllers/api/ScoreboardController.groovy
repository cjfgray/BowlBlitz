package api

import bowlblitz.BaseController
import bowlblitz.ScoreboardService
import bowlblitz.User

class ScoreboardController extends BaseController {
    ScoreboardService scoreboardService

    def scores() {
        Ok {
            scoreboardService.scores(request.user as User)
        }
    }
}
