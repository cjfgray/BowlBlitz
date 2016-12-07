package bowlblitz

import bowlblitz.commands.AddWinnerCommand
import bowlblitz.commands.BowlCommand
import bowlblitz.exceptions.BowlNotFoundException
import bowlblitz.exceptions.DuplicateException
import bowlblitz.exceptions.SeasonNotFoundException
import bowlblitz.exceptions.TeamNotFoundException
import grails.converters.JSON
import grails.transaction.Transactional

@Transactional
class BowlService {

    List<Bowl> listSeason(String year) {
        Bowl.findAllBySeason(Season.findByYear(Integer.parseInt(year)))
    }

    Bowl create(BowlCommand bowlCommand) {
        if(Bowl.findByName(bowlCommand.name))
            throw new DuplicateException("Bowl exists with name, ${bowlCommand.name}")

        Team team1 = Team.findByName(bowlCommand.team1 as String)
        if(!team1)
            throw new TeamNotFoundException("Team not found by name ${bowlCommand.team1}")
        Team team2 = Team.findByName(bowlCommand.team2 as String)
        if(!team2)
            throw new TeamNotFoundException("Team not found by name ${bowlCommand.team2}")
        Season season = Season.findByYear(Integer.parseInt(bowlCommand.season as String))

        if(!season)
            throw new SeasonNotFoundException("Season not found by name ${bowlCommand.season}")

        if(Bowl.findByTeam1AndTeam2AndSeason(team1, team2, season))
            throw new DuplicateException("Bowl exists for given teams/season")

        new Bowl(name: bowlCommand.name, team1: team1, team2: team2, bowlDate: new Date(bowlCommand.bowlDate).toTimestamp(),season: season).save(flush: true)
    }

    def addWinner(List<Map<String, String>> bowls) {
        println((bowls as JSON).toString(true))

        bowls.each { b ->
            Bowl bowl = Bowl.findById(b.bowlId as Long)
            if(!bowl)
                throw new BowlNotFoundException("Bowl not found with id: ${b.bowlId}")

            Team winner = Team.findById(b.teamId as Long)
            if(!winner)
                throw new TeamNotFoundException("Team not found with id: ${b.winnerId}")

            bowl.with {
                it.winner = winner
                save(failOnError: true, flush: true)
            }
        }
    }
}
