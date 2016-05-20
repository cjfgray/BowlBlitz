bowlBlitz.controller('loginController', ['$uibModal', 'authService', function ($uibModal, authService) {
    var loginCtrl = this;
    loginCtrl.openSignUp = function () {
        $uibModal.open({
            animation: true,
            template: `
                <div class="modal-body">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="email">E-Mail</label>
                    <input type="email" id="email" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="password" class="form-control">
                  </div>
                  <button id="confirmationButton" class="btn btn-primary btn-block" type="button" ng-click="ok()">Signup</button>
                </div>
                </div>
            `,
            controllerAs: 'loginModal',
            controller: ['$uibModalInstance', function ($uibModalInstance) {
                var loginModal = this;
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
          controller: ['$uibModalInstance', function ($uibModalInstance) {
            var loginModal = this;
          }],
          size: 'md'
        });
    };

}]);
