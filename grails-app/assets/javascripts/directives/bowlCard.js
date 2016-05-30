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
                <div class="card bowl-card" style="width:300px;display:inline-block;margin:10px;">
                <div class="card-block">
                    <h5 class="card-title">{{ctrl.bowl.name}} - CAMERON I NEED A LOCATION</h5>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable" ng-click="ctrl.bowl.winner = ctrl.team1.name">
                        <h4 ng-class="{active : ctrl.bowl.winner === ctrl.team1.name}">{{ctrl.bowl.team1.name}}</h4>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable" ng-click="ctrl.bowl.winner = ctrl.bowl.team2.name">
                        <h4 ng-class="{active : ctrl.bowl.winner === ctrl.bowl.team2.name}">{{ctrl.bowl.team2.name}}</h4>
                    </div>
                </div>
            </div>`
    }
});