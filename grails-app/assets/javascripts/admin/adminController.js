bowlBlitz.controller('adminController', function (bowlService) {
    var adminCtrl = this;
    adminCtrl.createBowl = function () {
        console.log(adminCtrl.bowl);
        bowlService.addBowl(adminCtrl.bowl).then(
            function success(response) {
                adminCtrl.bowls.push(response.data);
            },
            function error(response) {
                console.log(response);
            }
        )
    };

    adminCtrl.submitWinners = () => {

        bowlService.addWinners(
            _.reduce(adminCtrl.bowls, (list,bowl) => {
                if(bowl.winner !== ""){
                    list.push({
                        "bowlId": bowl.id,
                        "teamId": bowl.winner
                    })
                }
                return list;
            },[])
        ).then(
            success => console.log(success),
            error => console.log(error)
        )
    };

    bowlService.listBowls(2016).then(
        function success(result) {
            adminCtrl.bowls = result;
        }
    );

});
