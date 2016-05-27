bowlBlitz.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('scoreboard', {
            url: "/scoreboard",
            templateUrl: "static/views/partials/scoreboard.html",
            controller: 'scoreboardCtrl as scoreboard',
            authenticate: false
        })
        .state('scoreboard.list', {
            url: "/list",
            templateUrl: "static/views/partials/scoreboard.list.html",
            controller: 'scoreboardCtrl as scoreboard',
            authenticate: false
        })
}).controller('scoreboardCtrl', function () {
    var scoreboard = this;
    scoreboard.bowl = {name: "", team1: {name: ""}, team2: {name: ""}, season: {year: ""}, bowlDate: ""};
    scoreboard.total = 50;
    scoreboard.users = [
        {
            name: 'Emilee H.',
            wins: 50,
            losses: 0
        }, {
            name: 'Erika L.',
            wins: 45,
            losses: 5
        }, {
            name: 'Marcus H.',
            wins: 30,
            losses: 20
        }, {
            name: 'Logan L.',
            wins: 15,
            losses: 35
        }]
});