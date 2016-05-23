bowlBlitz.service('bowlService', function ($http) {
    return {
        addBowl: bowlData => {
            var req = {
                'url': '/api/admin',
                'method': 'POST',
                'headers': {
                    'content-type': 'application/json'
                },
                'data': bowlData
            };
            return $http(req);
        },
        listBowls: () => $http.get('/BowlBlitz/api/bowl/list/2016').then(result => result.data)
    }
});