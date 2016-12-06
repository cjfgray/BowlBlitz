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
            authService.login(loginCtrl.user).then(
                success => {
                    location.href = '/view/scoreboard';
                },
                failure => {
                    if(failure.status == 401)
                        alert("Invalid user id or password. Please re-enter and try again.");
                    else
                        alert(failure.statusText);
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
