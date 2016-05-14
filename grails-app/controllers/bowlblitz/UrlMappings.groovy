package bowlblitz

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')

        "/api/bowl/list/$season"(controller: "bowl", action: "listSeason", method: "GET")
        "/api/bowl"(controller: "bowl", action: "create", method: "POST")
    }
}
