package bowlblitz

class UrlMappings {

    static mappings = {
        "/"(controller: "authentication", action: "index")

        "/authentication/login"(controller: "authentication", action: "login", method: "POST")
        "/authentication/signUp"(controller: "authentication", action: "signUp", method: "POST")

        "/view/scoreboard"(view:"/views/scoreboard")
        "/view/admin"(view:"/views/admin")
        "/view/user"(view:"/views/user")
        "/view/pick"(view:"/views/pick")

        "500"(view:'/error')
        "404"(view:'/notFound')

        "/api/bowl/list/$season"(controller: "bowl", action: "listSeason", method: "GET")
        "/api/bowl"(controller: "bowl", action: "create", method: "POST")
        "/api/bowl"(controller: "bowl", action: "addWinner", method: "PUT")

        "/api/pick"(controller: "pick", action: "updatePicks", method: "PUT")
        "/api/pick/$season"(controller: "pick", action: "list", method: "GET")
    }
}
