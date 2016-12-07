bowlBlitz.service('bowlService', function ($http) {
    return {
        addBowl: bowlData => {
           var req = {
                'url': '/api/bowl',
                'method': 'POST',
                'headers': {
                    'content-type': 'application/json'
                },
                'data': bowlData
            };

            return $http(req);
        },
        listBowls: season => $http.get(`/api/bowl/list/${season}`).then(result => result.data),
        addWinners: bowls => {
            console.log(bowls);
            var req = {
                'url': '/api/bowl',
                'method': 'PUT',
                'headers': {
                    'content-type': 'application/json'
                },
                'data': bowls
            };

            return $http(req)
        }
    }
});
