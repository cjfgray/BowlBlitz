bowlBlitz.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "static/views/partials/state1.html",
            authenticate: false
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "static/views/partials/state1.list.html",
            controller: 'state1Controller as state1Ctrl',
            authenticate: false
        })
}).controller('state1Controller', ['itemService', function(itemService) {
        var state1Ctrl = this;
        state1Ctrl.bowl = {name: "",team1: {name: ""},team2: {name: ""},season: {year: ""},bowlDate: ""};
        state1Ctrl.bowls = itemService.getbowls;
        state1Ctrl.addBowl = function() {itemService.addBowl(state1Ctrl.bowl);}
}]);