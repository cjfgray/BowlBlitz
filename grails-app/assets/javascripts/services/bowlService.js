bowlBlitz.service('bowlService', function ($http) {
    return {
        addBowl: bowlData => {
            req = {
                'url': '/BowlBlitz/api/bowl',
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
