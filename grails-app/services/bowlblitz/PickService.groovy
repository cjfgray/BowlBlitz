package bowlblitz

import bowlblitz.commands.PickCommand
import grails.transaction.Transactional

@Transactional
class PickService {

    def updatePicks(List<PickCommand> picks, User user) {
        League globalLeage = League.findByName("global")
        picks.each { PickCommand pick ->
            Bowl bowl = Bowl.findById(pick.bowlId)
            Team winner = Team.findById(pick.teamId)
            Pick currentPick = Pick.findByBowlAndUserAndLeague(bowl, user, globalLeage) ?: new Pick(user: user, season: bowl.season, league: globalLeage, bowl: bowl)
            currentPick.with { cp ->
                cp.winner = winner
                save(failOnError: true, flush: true)
            }
        }
    }
}
