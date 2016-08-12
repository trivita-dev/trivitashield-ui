export default class Profile {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    get(id) {
        return this._$http({
            url: this._AppConstants.api + '/profile/' + id,
            method: 'GET'
        }).then((res) => res.data.profile);
    }
}