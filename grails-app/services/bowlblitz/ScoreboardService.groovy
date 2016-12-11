package bowlblitz

import grails.transaction.Transactional

@Transactional
class ScoreboardService {

    List<Map<String, Object>> scores(User user) {
        Season season = Season.findByYear(2016)
        League global = League.findByName("global")
        def picks = Pick.findAllBySeasonAndLeague(season, global).findAll { it.winner && it.bowl.winner}.groupBy {it.user.email}
        User.findAll().collect { _user ->
            def userPicks = picks[_user.email].sort {it.bowl.id}.collect {it.winner.id}
            def loggedInPicks = picks[user.email].sort {it.bowl.id}.collect {it.winner.id}
            int score = picks[_user.email].findAll { it.bowl.winner.id == it.winner.id }.size()
            int differences = [userPicks, loggedInPicks].transpose().count { List pair -> pair[0] != pair[1]}
            [
                    name: "${_user.firstName} ${_user.lastName}",
                    score: score,
                    differences: differences
            ]
        }
    }
}
