package bowlblitz

class DevelopmentData {
    static def load() {
        (1..50).each {
            new Team(name: "team${it}").save(failOnError: true)
        }
        (1..25).each {
            new Season(year: (2016 + it), startDate: new Date("01/01/${2016 + it}").toTimestamp(), endDate: new Date("12/31/${2016 + it}").toTimestamp()).save(failOnError: true)
        }
        (1..25).each {
            Team team1 = Team.findById((it*2)-1)
            Team team2 = Team.findById(it*2)
            new Bowl(name: "bowl${it}", team1: team1, team2: team2, bowlDate: new Date().plus(it).toTimestamp(), season: Season.findByYear(2016 + it)).save(failOnError: true)
        }
    }
}
