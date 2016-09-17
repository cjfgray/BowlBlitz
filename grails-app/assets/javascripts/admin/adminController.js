bowlBlitz.config(function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'static/views/partials/admin.html',
            controller: 'adminController as adminCtrl',
            authenticate: false,
            admin: true
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

    bowlService.listBowls(2016).then(
        function success(result) {
            adminCtrl.bowls = result;
        }
    )
});
