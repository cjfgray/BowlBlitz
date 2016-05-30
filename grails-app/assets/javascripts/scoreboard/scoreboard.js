//TODO: hardcoded 50 as the total. Need to figure out a way to dynamically do that. Can be fixed with data model.

bowlBlitz.directive('userScoreboard',function(){
    return{
        restrict: 'E',
        bindToController: {
            'user' : '='
        },
        controller: function(){},
        controllerAs: 'scoreboard',
        template:`
            <div class="scoreboard-card card card-block"  ng-style="{'background': 'linear-gradient(to right, #EC6164 ' + {{(scoreboard.user.wins / 50)*100}} + '%, #1F1C26 ' + {{(scoreboard.user.wins / 50)*100}} + '%'}">
                <span class="text-white">{{scoreboard.user.name}}</span>
                <span class="pull-right text-white">Win: {{scoreboard.user.wins}} | Lose: {{scoreboard.user.losses}}</span>
            </div>`
    }
});