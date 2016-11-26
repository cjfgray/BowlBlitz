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
                        <div style="position:absolute;right:10px;">
                            <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 73" version="1.1" x="0px" y="0px"><title>award</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-31.000000, -14.000000)" fill="#3BB05A"><path d="M65.5,20 L65.5,41.3333333 L53,46.7096774 L53,51.2488753 C61.51314,52.6771096 68,60.0810111 68,69 C68,78.9411255 59.9411255,87 50,87 C40.0588745,87 32,78.9411255 32,69 C32,60.0810111 38.48686,52.6771096 47,51.2488753 L47,46.7096774 L34.5,41.3333333 L34.5,20 L31,20 L31,14 L69,14 L69,20 L65.5,20 Z M50,74.5 L43.5343622,77.8991869 L44.7691892,70.6995935 L39.5383783,65.6008131 L46.7671811,64.5504065 L50,58 L53.2328189,64.5504065 L60.4616217,65.6008131 L55.2308108,70.6995935 L56.4656378,77.8991869 L50,74.5 Z M40,25.2409407 L44,25.2409407 L44,37 L40,37 L40,25.2409407 Z M56,25.2409407 L60,25.2409407 L60,37 L56,37 L56,25.2409407 Z M48,25.2409407 L52,25.2409407 L52,37 L48,37 L48,25.2409407 Z"/></g></g></svg>
                        </div>
                        <h4 class="card-title">{{ctrl.bowl.name}}</h4>
                        <h5 class="card-title">{{ctrl.bowl.location.stadiumName}}</h5>
                        <h5 class="card-title">{{ctrl.bowl.location.city}}, {{ctrl.bowl.location.state}}</h5>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team text-lg-center" ng-click="ctrl.bowl.winner = ctrl.team1.name">
                                <h4 ng-class="{active : ctrl.bowl.winner === ctrl.team1.name}">{{ctrl.bowl.team1.name}}</h4>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team text-lg-center" ng-click="ctrl.bowl.winner = ctrl.bowl.team2.name">
                                <h4 ng-class="{active : ctrl.bowl.winner === ctrl.bowl.team2.name}">{{ctrl.bowl.team2.name}}</h4>
                            </div>
                        </div>
                    </div>
            </div>`
    }
});