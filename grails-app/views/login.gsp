<html ng-app="bowlBlitz">
<head>
    <meta name="viewport" content="width=device-width" />
    <asset:javascript src="application.js"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <asset:stylesheet src="application.css"/>
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
                <button type="button" class="btn btn-outline-info btn-block action-button">Sign Up</button>
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
    <!-- <div class="row">
        <div class="col-xs-12 col-sm-12 hidden-md-up">
            <nav class="mobile-menu">
                <input type="checkbox" class="open" id="open"/>
                <label class="open-button" for="open">
                    <span class="menu-icon top"></span>
                    <span class="menu-icon middle"></span>
                    <span class="menu-icon bottom"></span>
                </label>
                <a href="#" class="item">1</a>
                <a href="#" class="item">2</a>
                <a href="#" class="item">3</a>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    </defs>
            </svg>
        </div> -->
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
                    <input type="text" id="email" class="form-control input-mobile" placeholdder="Email">
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
</body>
</html>
