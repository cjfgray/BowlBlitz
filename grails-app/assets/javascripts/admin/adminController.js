bowlBlitz.config(function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'static/views/partials/admin.html',
            controller: 'adminController as adminCtrl',
            authenticate: false
        });
}).controller('adminController', function (bowlService) {
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

    bowlService.listBowls().then(
        function success(result) {
            adminCtrl.bowls = result;
        }
    )
});
