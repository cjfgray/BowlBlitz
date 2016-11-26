bowlBlitz.service('authService', ['$http', function($http) {
	return {
	 	createAccount : userData => {
	 		console.log(userData);
        	return $http.post(`http://ctokens.herokuapp.com/users`, userData);
		},
		login: userData => {
			console.log(userData);
			$http.post(``);
		},
		forgotPassword: userData => {
			console.log(userData);
			return $http.post(`http://ctokens.herokuapp.com/users`,userData);
		}
	}
}]);