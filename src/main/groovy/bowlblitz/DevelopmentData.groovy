package bowlblitz

class DevelopmentData {
    static def load() {
        (1..50).each { new Team(name: "team${it}").save() }
        List<Location> locations = (1..10).collect { new Location(stadiumName: "${it}Stadium", city: "someCity$it", state: "someState$it").save() }
        Season season = new Season(year: 2016, startDate: new Date("01/01/2016"), endDate: new Date("12/31/2016")).save()
        List<Bowl> bowls = (1..10).collect{
            Team team1 = Team.findById((it*2)-1)
            Team team2 = Team.findById(it*2)
            new Bowl(name: "bowl${it}", team1: team1, team2: team2, location: locations[it-1],bowlDate: new Date().plus(it).toTimestamp(), season: Season.findByYear(2016)).save()
        }
        League league = new League(name: "global")

        List<User> users = (1..5).collect {
            new User(email: "$it$it$it$it@gmail.com", firstName: "fname$it", lastName: "lname$it", isAdmin: false).save()
        }

        users.each { User user ->
            bowls.each { Bowl bowl ->
                new Pick(bowl: bowl, user: user, winner: bowl.team1, season: season, league: league).save()
            }
        }

        User cjfgray = new User(email: "cjfgray@gmail.com", firstName: "Cameron", lastName: "Gray", isAdmin: true).save()
        bowls.each { bowl ->
            new Pick(bowl: bowl, user: cjfgray, winner: bowl.team1, season: season, league: league).save()
        }

        User cj = new User(email: "cjfgray@gmail.com", firstName: "Cameron", lastName: "Gray", isAdmin: true).save()
        bowls.each { bowl ->
            new Pick(bowl: bowl, user: cj, winner: bowl.team1, season: season, league: league).save()
        }
    }
}
