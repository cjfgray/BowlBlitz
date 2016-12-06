package bowlblitz

import grails.transaction.Transactional

@Transactional
class UserService {

    User findByEmail(String email) {
        User.findByEmail(email)
    }
}
