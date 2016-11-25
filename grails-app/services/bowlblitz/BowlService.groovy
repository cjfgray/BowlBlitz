package bowlblitz

import bowlblitz.commands.BowlCommand
import grails.transaction.Transactional

@Transactional
class BowlService {

    List<Bowl> listSeason(String year) {
        Bowl.findAllBySeason(Season.findByYear(Integer.parseInt(year)))
    }

    Bowl create(BowlCommand bowlCommand) {
        bowlCommand.with {
            new Bowl(name: name,
                    team1: Team.findByName(team1 as String),
                    team2: Team.findByName(team2 as String),
                    bowlDate: new Date(bowlDate).toTimestamp(),
                    season: Season.findByYear(Integer.parseInt(season as String))).save(flush: true)
        }
    }
}
