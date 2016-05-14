import bowlblitz.Bowl
import bowlblitz.DevelopmentData
import bowlblitz.Team
import grails.converters.JSON

class BootStrap {
    DevelopmentData developmentData

    def init = { servletContext ->
        developmentData = new DevelopmentData()

        JSON.registerObjectMarshaller(Team) { Team team ->
            [
                    name: team.name
            ]
        }

        JSON.registerObjectMarshaller(Bowl) { Bowl bowl ->
            [
                    name: bowl.name,
                    team1: bowl.team1,
                    team2: bowl.team2,
                    bowlDate: bowl.bowlDate,
                    season: bowl.season
            ]
        }

        developmentData.load()
    }
    def destroy = {
    }
}
