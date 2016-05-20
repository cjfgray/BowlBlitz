bowlBlitz.service('itemService', ['$http', function($http) {
    var itemService = this;
    itemService.bowls = [];
    $http.get('/BowlBlitz/api/bowl/list/2016').then(
        function(result){
            itemService.bowls = result.data;
        }
    );
    itemService.getbowls = function() {
        return itemService.bowls;
    };
    itemService.addBowl = function(bowl) {
        itemService.bowls.push(bowl);
    };
}])