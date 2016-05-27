bowlBlitz.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('state2', {
            url: "/state2",
            templateUrl: "static/views/partials/state2.html",
            controller: 'scoreboardCtrl as scoreboard',
            authenticate: false
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "static/views/partials/state2.list.html",
            controller: 'scoreboardCtrl as scoreboard',
            authenticate: false
        })
}).controller('scoreboardCtrl', ['itemService', function (itemService) {
    var scoreboard = this;
    scoreboard.bowl = {name: "", team1: {name: ""}, team2: {name: ""}, season: {year: ""}, bowlDate: ""};
    scoreboard.bowls = itemService.getbowls;
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
}]);