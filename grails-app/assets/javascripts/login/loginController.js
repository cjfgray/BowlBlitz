bowlBlitz.controller('loginController', ['$uibModal', 'authService', function ($uibModal, authService) {
    var loginCtrl = this;
    $('nav').hide();
    loginCtrl.type = true;
    loginCtrl.openSignUp = function () {
        $uibModal.open({
            animation: true,
            template: `
                <div class="modal-body">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" class="form-control" ng-model="loginModal.user.username">
                  </div>
                  <div class="form-group">
                    <label for="email">E-Mail</label>
                    <input type="email" id="email" class="form-control" ng-model="loginModal.user.email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" ng-model="loginModal.user.password">
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="password" class="form-control">
                  </div>
                  <button id="confirmationButton" class="btn btn-primary btn-block" type="button" ng-click="loginModal.signUp()">Signup</button>
                </div>
                </div>
            `,
            controllerAs: 'loginModal',
            controller: ['$uibModalInstance', function ($uibModalInstance) {
                var loginModal = this;
                loginModal.user = {};
                loginModal.signUp = () => {

                }
            }],
            size: 'md'
        });
    };

    loginCtrl.openLogin = function () {
        $uibModal.open({
          animation: true,
          template: `
              <div class="modal-body">
                <div class="form-group">
                  <label for="email">E-Mail</label>
                  <input type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" class="form-control">
                </div>
                <button id="confirmationButton" class="btn btn-primary btn-block" type="button" ng-click="ok()">Login</button>
              </div>
              </div>
          `,
          controllerAs: 'loginModal',
          controller: ['$uibModalInstance', 'authService', function ($uibModalInstance, authService) {
              var loginModal = this;
              //loginModal.login = () => {
              //    if(authService.authenticate())
              //
              //}
          }],
          size: 'md'
        });
    };

}]);
