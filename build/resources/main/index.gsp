<!doctype html>
<html ng-app="bowlBlitz">
<head>
    <asset:javascript src="application.js"/>
    <asset:stylesheet src="vendor/bootstrap.css"/>
    <h1>Bowl Blitz</h1>
    <hr/>
</head>
<body>
    <div ui-view></div>
    <!-- We'll also add some navigation: -->
    <a ui-sref="state1">State 1</a>
    <a ui-sref="state2">State 2</a>
</body>

</html>
