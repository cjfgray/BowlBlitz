bowlBlitz.service('pickService',function ($http) {
    return {
        getPicks : season => $http.get(`/api/pick/2016`).then(response => response.data),
        getPicksByUser : user => $http.get(`/api/pick/${user}`).then(response => response.data),
        submitPicks : picks => $http.put(`/api/pick`, picks)
    }
})