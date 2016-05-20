package bowlblitz

class DevelopmentData {
    static def load() {
        (1..50).each {
            new Team(name: "team${it}").save(failOnError: true)
        }
        new Season(year: 2016, startDate: new Date("01/01/2016").toTimestamp(), endDate: new Date("12/31/2016").toTimestamp()).save(failOnError: true)
        (1..10).each {
            Team team1 = Team.findById((it*2)-1)
            Team team2 = Team.findById(it*2)
            new Bowl(name: "bowl${it}", team1: team1, team2: team2, bowlDate: new Date().plus(it).toTimestamp(), season: Season.findByYear(2016)).save(failOnError: true)
        }
    }
}
