package bowlblitz.commands

class BowlCommand {
    String name
    String team1
    String team2
    String bowlDate
    String season
}

class AddWinnerCommand {
    Long bowlId
    Long winnerId
}
