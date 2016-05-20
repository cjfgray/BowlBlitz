var bowlBlitz = angular.module('bowlBlitz', [
    'ui.bootstrap',
    'ui.router'
]).service('authService', function() {
    var authService = this;
    authService.authenticate = function() {
        return true;
    }
}).service('itemService', function($http) {
    var itemService = this;
    itemService.bowls = [];
    $http.get('/BowlBlitz/api/bowl/list/2016').then(
        function(result){
            itemService.bowls = result.data;
        }
    );
    itemService.getbowls = function() {
        return itemService.bowls;
    };
    itemService.addBowl = function(bowl) {
        itemService.bowls.push(bowl);
    };
}).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "static/views/partials/state1.html",
            authenticate: false
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "static/views/partials/state1.list.html",
            controllerAs: 'state1Ctrl',
            controller: function(itemService) {
                var ctrl = this;
                ctrl.bowl = {name: "",team1: {name: ""},team2: {name: ""},season: {year: ""},bowlDate: ""};
                ctrl.bowls = itemService.getbowls;
                ctrl.addBowl = function() {itemService.addBowl(ctrl.bowl);}
            },
            authenticate: false
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "static/views/partials/state2.html",
            authenticate: false
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "static/views/partials/state2.list.html",
            controllerAs: 'state2Ctrl',
            controller: function(itemService) {
                var ctrl = this;
                ctrl.bowl = {name: "",team1: {name: ""},team2: {name: ""},season: {year: ""},bowlDate: ""};
                ctrl.bowls = itemService.getbowls;
                ctrl.addBowl = function() {itemService.addBowl(ctrl.bowl);}
            },
            authenticate: true
        });
}).run(function($rootScope, $state, authService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        if (toState.authenticate && !authService.authenticate()){
            console.log('auth failed');
            $state.transitionTo("state1");
            event.preventDefault();
        }
    });
});