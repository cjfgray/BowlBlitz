<html ng-app="bowlBlitz">
<head>
    <asset:javascript src="application.js"/>
    <asset:stylesheet src="vendor/bootstrap.css"/>
    <asset:stylesheet src="login.css"/>
</head>
<body>
    <header id="top" class="header" ng-controller="loginController as loginCtrl">
        <div class="overlay text-vertical-center">
            <h1 class="white-text">Bowl Blitz</h1>
            <h3 class="white-text">College Football &amp; Picks</h3>
            <br>
            <a class="btn btn-dark btn-lg" ng-click="loginCtrl.openSignUp()">Sign Up</a>
            <a class="btn btn-dark btn-lg" ng-click="loginCtrl.openLogin()">Login</a>
        </div>
</header>
</body>
</html>