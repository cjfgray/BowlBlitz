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
    )
    itemService.getbowls = function() {
        return itemService.bowls;
    }
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
                ctrl.bowls = itemService.getbowls;
                //ctrl.addItem = function() {ctrl.bowls.push(ctrl.newItem);}
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
                ctrl.bowls = itemService.getbowls;
                //ctrl.addItem = function() {ctrl.items.push(ctrl.newItem);}
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