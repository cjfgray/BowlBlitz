bowlBlitz.directive('pickCard', function(){
    return{
        restrict: 'E',
        bindToController:{
            'pick' : '='
        },
        controller: function(){},
        controllerAs: 'ctrl',
        template:
            `
                <div class="bowl-card col-lg-4 col-sm-6 col-xs-12 inline" style="padding:5px;">
                    <div class="card-block">
                        <div style="position:absolute;right:10px;" ng-if="ctrl.pick.bowl.winner && ctrl.pick.bowl.winner.name === ctrl.pick.winner.name">
                            <svg height="30" width="30" fill="#EC6164" http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M86.487,14.453c-2.902-0.642-6.253-0.23-9.408,0.959c0.027-1.705,0.019-3.37-0.029-4.967H50H22.95   c-0.048,1.597-0.057,3.262-0.029,4.967c-3.155-1.189-6.505-1.601-9.408-0.959c-4.292,0.944-7.206,3.894-8.205,8.299   c-1.305,5.751,1.568,12.345,8.089,18.569c5.138,4.903,12.031,8.982,19.311,11.502c3.016,4.252,6.877,7.678,11.776,9.761   c-0.714,2.609-3.221,10.167-9.279,14.792H50h14.796c-6.059-4.625-8.565-12.183-9.279-14.792c4.899-2.083,8.761-5.509,11.776-9.762   c7.279-2.519,14.173-6.598,19.311-11.501c6.521-6.225,9.394-12.818,8.089-18.569C93.693,18.347,90.779,15.397,86.487,14.453z    M17.738,36.774c-4.716-4.504-7.071-9.224-6.298-12.63c0.454-2.01,1.544-3.138,3.428-3.554c2.487-0.549,5.731,0.285,8.403,1.938   c0.607,7.209,2.031,14.738,4.696,21.418C24.132,41.952,20.61,39.516,17.738,36.774z M82.262,36.774   c-2.872,2.741-6.394,5.178-10.229,7.173c2.666-6.68,4.09-14.209,4.696-21.418c2.672-1.652,5.916-2.486,8.403-1.938   c1.884,0.416,2.974,1.544,3.428,3.554C89.333,27.551,86.978,32.271,82.262,36.774z"/><rect x="31" y="81.341" width="38" height="8.214"/></g></svg>
                        </div>
                        <h4 class="card-title">{{ctrl.pick.bowl.name}}</h4>
                        <h5 class="card-title">{{ctrl.pick.bowl.location.stadiumName}}</h5>
                        <h5 class="card-title">{{ctrl.pick.bowl.location.city}}, {{ctrl.pick.bowl.location.state}}</h5>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team text-lg-center" ng-click="ctrl.pick.winner = ctrl.pick.bowl.team1.id">
                                <h4 ng-class="{active : ctrl.pick.winner === ctrl.pick.bowl.team1.id}">{{ctrl.pick.bowl.team1.name}}</h4>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clickable inline-flex bowl-team text-lg-center" ng-click="ctrl.pick.winner = ctrl.pick.bowl.team2.id">
                                <h4 ng-class="{active : ctrl.pick.winner === ctrl.pick.bowl.team2.id}">{{ctrl.pick.bowl.team2.name}}</h4>
                            </div>
                        </div>
                    </div>
            </div>`
    }
});