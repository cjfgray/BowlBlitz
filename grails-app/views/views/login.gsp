<meta name="layout" content="main">
<div class="login" ng-controller="loginController as loginCtrl">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 col-lg-8 offset-lg-2 offset-xl-2 col-xl-8 hidden-sm-down">
        <div class="row background">
          <div class="col-md-6 col-lg-6 col-xl-6 hidden-sm-down">
            <div ng-show="loginCtrl.type" class="card login-card card-block hide">
                <div class="row">
                    <h3>Login</h3>
                    <div class="input-group col-md-12 col-lg-12 col-xl-12">
                        <input type="text" id="email" class="form-control desktop-input" placeholder="Email">
                    </div>
                    <div class="input-group col-md-12 col-lg-12 col-xl-12">
                        <input type="text" id="password" class="form-control desktop-input" placeholder="Password">
                    </div>
                </div>
              <button type="button" class="btn btn-outline-info btn-block action-button">Login</button>
            </div>
            <div class="question" ng-show="!loginCtrl.type">
              <h4>Have an account?</h4>
              <button ng-click="loginCtrl.type = !loginCtrl.type" class="btn btn-outline-info card-change-button">Login</button>
            </div>
          </div>
          <div class="col-md-6 test col-lg-6 col-xl-6 hidden-sm-down">
            <div ng-show="!loginCtrl.type" class="card card-block signup-card hidden">
                <div class="row">
                    <h3>Signup</h3>
                    <div class="input-group col-md-12 col-lg-12 col-xl-12">
                        <input ng-model="loginCtrl.signup.email" type="email" id="email" class="form-control desktop-input" placeholder="Email">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input ng-model="loginCtrl.signup.firstName"  type="text" id="first" class="form-control desktop-input" placeholder="First Name">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input ng-model="loginCtrl.signup.lastName" type="text" id="last" class="form-control desktop-input" placeholder="Last Name">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input ng-model="loginCtrl.signup.password"  type="password" id="password" type="password" class="form-control desktop-input" placeholder="Password">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input type="password" id="confirmPassword" class="form-control desktop-input" placeholder="Confirm Password">
                    </div>
                </div>
                <button ng-click="loginCtrl.signup()" type="button" class="btn btn-outline-info btn-block action-button">Sign Up</button>
            </div>
            <div class="quesiton" ng-show="loginCtrl.type">
              <h4>Don't have an account?</h4>
              <button ng-click="loginCtrl.type = !loginCtrl.type" class="btn btn-outline-info card-change-button">Sign Up</button>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-sm-6 hidden-md-up mobile">
        <div class="buttons">
            <button ng-click="loginCtrl.type = true" class="btn btn-lg btn-outline-info mobile-change-button">Login</button>
            <button ng-click="loginCtrl.type = false" class="btn btn-lg btn-outline-info mobile-change-button">Signup</button>
        </div>
        <div ng-show="loginCtrl.type" class="login-mobile">
           <div class="input-group">
                <input type="text" id="email" class="form-control input-mobile" placeholder="Email">
           </div>
           <div class="input-group">
                <input type="text" id="password" class="form-control input-mobile" placeholder="Password">
           </div>
        </div>
        <div ng-show="!loginCtrl.type" class="signup-mobile">
           <div class="input-group">
                <input type="text" id="email" class="form-control input-mobile" placeholder="Email">
           </div>
           <div class="input-group">
                <input type="text" id="firstName" class="form-control input-mobile" placeholder="First Name">
           </div>
           <div class="input-group">
                <input type="text" id="lastName" class="form-control input-mobile" placeholder="Last Name">
           </div>
           <div class="input-group">
                <input type="text" id="password" class="form-control input-mobile" placeholder="Password">
           </div>
           <div class="input-group">
                <input type="text" id="confirmPassword" class="form-control input-mobile" placeholder="Confirm Password">
           </div>
        </div>
    </div>
    </div>
  </div>
</div>