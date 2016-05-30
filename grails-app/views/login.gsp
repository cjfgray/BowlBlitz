<html ng-app="bowlBlitz">
<head>
    <meta name="viewport" content="width=device-width" />
    <asset:javascript src="application.js"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
    <asset:stylesheet src="login.css"/>
</head>
<body>  
<div ng-controller="loginController as loginCtrl">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 col-lg-8 col-lg-offset-2 col-xl-8 hidden-sm-down">
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
              <button type="button" class="btn btn-info-outline btn-block action-button">Login</button>
            </div>
            <div class="question" ng-show="!loginCtrl.type">
              <h4>Have an account?</h4>
              <button ng-click="loginCtrl.type = !loginCtrl.type" class="btn btn-info-outline card-change-button">Login</button>
            </div>
          </div>
          <div class="col-md-6 test col-lg-6 col-xl-6 hidden-sm-down">
            <div ng-show="!loginCtrl.type" class="card card-block signup-card hidden">
                <div class="row">
                    <h3>Signup</h3>
                    <div class="input-group col-md-12 col-lg-12 col-xl-12">
                        <input type="text" id="email" class="form-control desktop-input" placeholder="Email">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input type="text" id="first" class="form-control desktop-input" placeholder="First Name">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input type="text" id="last" class="form-control desktop-input" placeholder="Last Name">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input type="text" id="password" type="password" class="form-control desktop-input" placeholder="Password">
                    </div>
                    <div class="input-group col-md-6 col-lg-6 col-xl-6">
                        <input type="text" id="confirmPassword" class="form-control desktop-input" placeholder="Confirm Password">
                    </div>
                </div>
                <button type="button" class="btn btn-info-outline btn-block action-button">Sign Up</button>
            </div>
            <div class="quesiton" ng-show="loginCtrl.type">
              <h4>Don't have an account?</h4>
              <button ng-click="loginCtrl.type = !loginCtrl.type" class="btn btn-info-outline card-change-button">Sign Up</button>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 hidden-md-up">
            <div class="buttons">
                <button ng-click="loginCtrl.type = true" class="btn btn-lg btn-info-outline mobile-change-button">Login</button>
                <button ng-click="loginCtrl.type = false" class="btn btn-lg btn-info-outline mobile-change-button">Signup</button>
            </div>
            <div ng-show="loginCtrl.type" class="login-mobile">
               <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control input-mobile">
               </div>
               <div class="input-group">
                    <label for="password">Password</label>
                    <input type="text" id="password" class="form-control input-mobile">
               </div>
            </div>
            <div ng-show="!loginCtrl.type" class="signup-mobile">
               <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control input-mobile">
               </div>
               <div class="input-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" class="form-control input-mobile">
               </div>
               <div class="input-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" class="form-control input-mobile">
               </div>
               <div class="input-group">
                    <label for="password">Password</label>
                    <input type="text" id="password" class="form-control input-mobile">
               </div>
               <div class="input-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="text" id="confirmPassword" class="form-control input-mobile">
               </div>
            </div>
            <p>{{loginCtrl.type}}</p>
        </div>
    </div>
  </div>
</div>
</body>
</html>