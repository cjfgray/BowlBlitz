package bowlblitz

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: "authentication", action: "index")
        "/scoreboard"(view:"/views/scoreboard")
        "/admin"(view:"/views/admin")
        "/user"(view:"/views/user")

        "500"(view:'/error')
        "404"(view:'/notFound')

        "/authentication/login"(controller: "authentication", action: "login", method: "POST")
        "/authentication/signUp"(controller: "authentication", action: "signUp", method: "POST")

        "/api/bowl/list/$season"(controller: "bowl", action: "listSeason", method: "GET")
        "/api/bowl"(controller: "bowl", action: "create", method: "POST")

        "/api/pick"(controller: "pick", action: "updatePicks", method: "PUT")
    }
}
