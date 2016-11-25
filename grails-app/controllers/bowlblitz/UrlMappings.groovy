package bowlblitz

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/views/login")
        "/scoreboard"(view:"/views/scoreboard")
        "/admin"(view:"/views/admin")
        "500"(view:'/error')
        "404"(view:'/notFound')

        "/api/bowl/list/$season"(controller: "bowl", action: "listSeason", method: "GET")
        "/api/bowl"(controller: "bowl", action: "create", method: "POST")
    }
}
