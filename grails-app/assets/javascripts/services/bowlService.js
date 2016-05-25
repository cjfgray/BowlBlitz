bowlBlitz.service('bowlService', function ($http) {
    var bowlService = this;

    bowlService.addBowl = bowlData => {
        console.log(bowlData);
        var req = {
            'url': '/api/admin',
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            'data': bowlData
        };

        return $http(req);
    };

    bowlService.listBowls = () => $http.get('/BowlBlitz/api/bowl/list/2016').then(result => result.data)
});
