package bowlblitz

import bowlblitz.commands.BowlCommand
import grails.transaction.Transactional

@Transactional
class BowlService {

    List<Bowl> listSeason(String season) {
        Bowl.findAllBySeason(season)
    }

    Bowl create(BowlCommand bowlCommand) {
        bowlCommand.with {
            new Bowl(name: name,
                    team1: Team.findByName(team1),
                    team2: Team.findByName(team2),
                    bowlDate: new Date(bowlDate).toTimestamp(),
                    season: season).save(failOnError: true, flush: true)
        }
    }
}
