<meta name="layout" content="main">
<div class="container-fluid scoreboard-container" ng-controller="scoreboardCtrl as scoreboard">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="text-xs-center">Leaderboard</h2>
            <hr/>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-10 col-lg-offset-1">
            <user-scoreboard ng-repeat="person in scoreboard.users | orderBy:'-wins'" user="person"></user-scoreboard>
        </div>
    </div>
</div>