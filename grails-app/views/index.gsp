<!doctype html>
<html ng-app="bowlBlitz">
<head>
    <asset:javascript src="application.js"/>
    <asset:stylesheet src="vendor/bootstrap.css"/>
    <asset:stylesheet src="application.css"/>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' type='text/css'>
    <h1>Bowl Blitz</h1>
    <hr/>
</head>
<body>
    <div ui-view></div>
    <!-- We'll also add some navigation: -->
    <a ui-sref="state1">State 1</a>
    <a ui-sref="state2">Scoreboard</a>
    <a ui-sref="admin">Admin</a>
</body>

</html>
