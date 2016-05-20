var bowlBlitz = angular.module('bowlBlitz', [
    'ui.bootstrap',
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
}).run(['$rootScope', '$state', 'authService', function($rootScope, $state, authService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        if (toState.authenticate && !authService.authenticate()){
            console.log('auth failed');
            $state.transitionTo("state1");
            event.preventDefault();
        }
    });
}]);