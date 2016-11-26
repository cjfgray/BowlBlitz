bowlBlitz.controller('loginController', ['authService', function (authService) {
    var loginCtrl = this;
    loginCtrl.type = true;
    $('nav').hide();
    loginCtrl.signup = () => {
      authService.createAccount(loginCtrl.signup).then(
        success => console.log(success),
        error => console.log(error)
      )
    }

    loginCtrl.login = () => {
      authService.login().then()
      
    }
}]);
