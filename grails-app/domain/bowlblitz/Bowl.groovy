package bowlblitz

import java.sql.Timestamp

class Bowl {
    String name
    Team team1
    Team team2
    Timestamp bowlDate
    String season
    Team winner

    static constraints = {
        winner nullable: true
    }
}
