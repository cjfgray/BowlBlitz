bowlBlitz.controller('pickController', function (pickService) {
   var picks = this;
   pickService.getPicks().then(
       data => picks.data = data,
       error => alert(error)
   )

    picks.submitPicks = () => {
        pickService.submitPicks(_.map(picks.data, pick => {
           return {
              "bowlId": pick.bowl.id,
               "teamId": pick.winner
           }
        }))
    }
});