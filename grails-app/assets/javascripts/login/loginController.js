angular.module('authentication', [])
    .controller('loginController', ['authService', function (authService) {
        var loginCtrl = this;
        loginCtrl.type = true;
        $('nav').hide();
        loginCtrl.signup = () => {
            authService.createAccount(loginCtrl.signup).then(
                success => console.log(success),
                error => console.log(error)
            )
        };

        loginCtrl.login = () => {
            console.log(loginCtrl.user);
            authService.login(loginCtrl.user).then(
                success => {
                    location.href = '/view/scoreboard';
                },
                failure => {
                    console.log(failure)
                }
            )
        }
    }])
    .service('authService', ['$http', function ($http) {
        return {
            createAccount: userData => {
                return $http.post(`/authentication/signUp`, userData);
            },
            login: userData => {
                return $http.post(`/authentication/login`, userData);
            }
        }
    }]);
