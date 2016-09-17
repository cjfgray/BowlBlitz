bowlBlitz.service('bowlService', function ($http) {
    return {
        addBowl: bowlData => {
            req = {
                'url': '/api/admin',
                'method': 'POST',
                'headers': {
                    'content-type': 'application/json'
                },
                'data': bowlData
            };

            return $http(req);
        },
        listBowls: season => $http.get(`/BowlBlitz/api/bowl/list/${season}`).then(result => result.data)
    }
});
