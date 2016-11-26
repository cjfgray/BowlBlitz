bowlBlitz.controller('userController', function (bowlService) {
    var user = this;

    bowlService.listBowls(2016).then(
        function success(result) {
            user.bowls = result;
        }
    )
});
