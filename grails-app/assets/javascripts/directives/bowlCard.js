bowlBlitz.directive('bowlCard', function(){
    return{
        restrict: 'E',
        bindToController:{
            'bowl' : '='
        },
        controller: function(){},
        controllerAs: 'ctrl',
        template:
            `
                <div class="bowl-card col-lg-4 col-sm-6 col-xs-12 inline" style="padding:5px;">
                    <div class="card-block">
                        <h4 class="card-title">{{ctrl.bowl.name}}</h4>
                        <h5 class="card-title">{{ctrl.bowl.location.stadiumName}}</h5>
                        <h5 class="card-title">{{ctrl.bowl.location.city}}, {{ctrl.bowl.location.state}}</h5>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team" ng-click="ctrl.bowl.winner = ctrl.team1.name">
                                <h4 ng-class="{active : ctrl.bowl.winner === ctrl.team1.name}">{{ctrl.bowl.team1.name}}</h4>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team" ng-click="ctrl.bowl.winner = ctrl.bowl.team2.name">
                                <h4 ng-class="{active : ctrl.bowl.winner === ctrl.bowl.team2.name}">{{ctrl.bowl.team2.name}}</h4>
                            </div>
                        </div>
                    </div>
            </div>`
    }
});