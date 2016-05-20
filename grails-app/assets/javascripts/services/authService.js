bowlBlitz.service('authService', ['$http', function($http) {
    var authService = this;
    authService.authenticate = function() {
        return true;
    }
}]);