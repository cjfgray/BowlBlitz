var bowlBlitz = angular.module('bowlBlitz', [
    'ui.bootstrap',
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "static/views/partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "static/views/partials/state1.list.html",
            controllerAs: 'state1Ctrl',
            controller: function() {
                var ctrl = this;
                ctrl.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "static/views/partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "static/views/partials/state2.list.html",
            controllerAs: 'state2Ctrl',
            controller: function() {
                var ctrl = this;
                ctrl.things = ["A", "Set", "Of", "Things"];
            }
        });
});;