bowlBlitz.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('state2', {
            url: "/state2",
            templateUrl: "static/views/partials/state2.html",
            authenticate: false
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "static/views/partials/state2.list.html",
            controller: 'state2Controller as state2Ctrl',
            authenticate: false
        })
}).controller('state2Controller', ['itemService', function(itemService) {
    var state2Ctrl = this;
    state2Ctrl.bowl = {name: "",team1: {name: ""},team2: {name: ""},season: {year: ""},bowlDate: ""};
    state2Ctrl.bowls = itemService.getbowls;
    state2Ctrl.addBowl = function() {itemService.addBowl(state2Ctrl.bowl);}
}]);