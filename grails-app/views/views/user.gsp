<meta name="layout" content="main">
<div class="container-fluid" ng-controller="userController as user">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <bowl-card ng-repeat="bowl in user.bowls" bowl="bowl"></bowl-card>
        </div>
    </div>
</div>
