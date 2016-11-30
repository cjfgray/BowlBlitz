package bowlblitz

import bowlblitz.commands.BowlCommand

import bowlblitz.exceptions.DuplicateException
import bowlblitz.exceptions.SeasonNotFoundException
import bowlblitz.exceptions.TeamNotFoundException
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
}
