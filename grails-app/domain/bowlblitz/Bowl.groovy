package bowlblitz

class Bowl {
    String name
    Date bowlDate
    Season season
    Location location
    Team team1
    Team team2
    Team winner

    static constraints = {
        winner nullable: true
    }
}
