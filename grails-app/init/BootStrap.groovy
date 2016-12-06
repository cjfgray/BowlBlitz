import bowlblitz.*
import ctokens.TokenUser
import ctokens.TokenUserUser
import grails.converters.JSON

class BootStrap {
    DevelopmentData developmentData

    def init = { servletContext ->
        developmentData = new DevelopmentData()

        JSON.registerObjectMarshaller(TokenUserUser) { tuu ->
            [
                    email: tuu.email,
                    firstName: tuu.firstName,
                    lastName: tuu.lastName
            ]
        }

        JSON.registerObjectMarshaller(TokenUser) { tu ->
            [
                    token: tu.token,
                    user: tu.user
            ]
        }

        JSON.registerObjectMarshaller(Team) { Team team ->
            [
                    id: team.id,
                    name: team.name
            ]
        }

        JSON.registerObjectMarshaller(Season) { Season season ->
            [
                    year: season.year,
                    startDate: season.startDate,
                    endDate: season.endDate
            ]
        }

        JSON.registerObjectMarshaller(Bowl) { Bowl bowl ->
            [
                    id: bowl.id,
                    name: bowl.name,
                    team1: bowl.team1,
                    team2: bowl.team2,
                    bowlDate: bowl.bowlDate,
                    season: bowl.season,
                    location: bowl.location
            ]
        }

        JSON.registerObjectMarshaller(Pick) { Pick pick ->
            [
                    bowl: pick.bowl,
                    user: pick.user,
                    winner: pick.winnerId,
                    season: pick.season,
                    league: pick.league.name
            ]
        }

        JSON.registerObjectMarshaller(Location) { Location location ->
            [
                    stadiumName: location.stadiumName,
                    city: location.city,
                    state: location.state
            ]
        }

        developmentData.load()
    }
    def destroy = {
    }
}
