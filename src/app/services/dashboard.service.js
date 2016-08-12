export default class Dashboard {
    constructor(AppConstants, $http, $q) {
        'ngInject';

        this.api = AppConstants.api;
        this._$http = $http;
    }

    get(uid) {

        return this._$http({
            url: this.api + '/dashboard/' + uid + '/',
            method: 'GET', 
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.data.dashboard);
        // }).then((res) => console.log(JSON.stringify(res.data.dashboard)));
    }
}


// http://dev-service.trivita.com/api/dashboard/8911daee-fede-4751-b15a-ef4707f541ee