package bowlblitz

import bowlblitz.exceptions.DuplicateException
import grails.transaction.Transactional

@Transactional
class LeagueService {

    def createLeague(String name, User user) {
        if(League.findByName(name))
            throw new DuplicateException("League already exists with name, $name")

        new League(admins: [user], users: [user], name: name).save(flush: true)
    }
}
