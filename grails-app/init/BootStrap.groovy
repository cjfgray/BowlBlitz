import bowlblitz.*
import grails.converters.JSON

class BootStrap {
    DevelopmentData developmentData

    def init = { servletContext ->
        developmentData = new DevelopmentData()

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
