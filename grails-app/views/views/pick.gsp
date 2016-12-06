<meta name="layout" content="main">
<div class="container-fluid" ng-controller="pickController as pickCtrl">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <pick-card ng-repeat="pick in pickCtrl.data" pick="pick"></pick-card>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button class="btn btn-primary btn-block" ng-click="pickCtrl.submitPicks()">Submit</button>
        </div>
    </div>
</div>
