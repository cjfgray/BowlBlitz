package bowlblitz

import bowlblitz.commands.PickCommand
import grails.transaction.Transactional

@Transactional
class PickService {

    List<Pick> list(int seasonYear, User user) {
        League league = League.findByName("global")
        Season season = Season.findByYear(seasonYear)
        Pick.findAllByUserAndSeasonAndLeague(user, season, league)
    }

    def updatePicks(List<Map<String, Integer>> picks, User user) {
        League globalLeague = League.findByName("global")
        println picks
        picks.each { pick ->
            Bowl bowl = Bowl.findById(pick.bowlId as Long)
            Team winner = Team.findById(pick.teamId as Long)
            Pick currentPick = Pick.findByBowlAndUserAndLeague(bowl, user, globalLeague) ?: new Pick(user: user, season: bowl.season, league: globalLeague, bowl: bowl)
            currentPick.with { cp ->
                cp.winner = winner
                save(failOnError: true, flush: true)
            }
        }
    }
}
