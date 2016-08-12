export default class User {
    constructor(Session, AppConstants, $http, $state, $q) {
        'ngInject';

        this._Session = Session;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$state = $state;
        this._$q = $q;

        this.current = null;
    }

    attemptAuth(type, credentials) {
        let route = (type === 'login') ? '/login/' : '';
        let data = "grant_type=password&client_id=" + this._AppConstants.clientID + "&client_secret=" + this._AppConstants.clientSecret + "&username=" + credentials.username + "&password=" + credentials.password;

        // TODO: Get SPinner Service Working
        // this._spinnerService.show('authSpinner');

        return this._$http({
            url: this._AppConstants.api + '/auth' + route,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(
            (res) => {
                this._Session.set(this._AppConstants.jwtKey, res.data.access_token);
                this._Session.jwt(res.data.access_token, 'localstorage');
                this.current = res.data;

                // TODO: Get SPinner Service Working
                // this._spinnerService.hide('authSpinner');

                return res;
            },
            (err) => {
                this.current = null;

                // TODO: Get SPinner Service Working
                // this._spinnerService.hide('authSpinner');

                this.errors = err.data.errors;
            }
        );
    }

    update(fields) {

        // TODO: Get SPinner Service Working
        // this._spinnerService.show('authSpinner');

        return this._$http({
            url: this._AppConstants.api + '/:slug/',
            method: 'PUT',
            data: { user: fields }
        }).then(
            (res) => {
                this.current = res.data;

                // TODO: Get SPinner Service Working
                // this._spinnerService.hide('authSpinner');

                return res.data;
            },
            (err) => {
                this.current = null;

                // TODO: Get SPinner Service Working
                // this._spinnerService.hide('authSpinner');

                this.errors = err.data.errors;
            }
        )
    }

    logout() {
        this.current = null;
        this._Session.end();
        this._$state.go('app.login', null, { reload: true });
    }

    verifyAuth() {
        let deferred = this._$q.defer();

        // check for Session token
        if (!this._Session.get(this._AppConstants.jwtKey)) {
            deferred.resolve(false);
            return deferred.promise;
        }

        if (this.current) {
            deferred.resolve(true);
        } else {
            this._$http({
                url: this._AppConstants.api + '/dashboard/',
                method: 'GET',
            }).then(
                (res) => {
                    this.current = res.data;
                    deferred.resolve(true);
                },
                (err) => {
                    this._Session.end();
                    deferred.resolve(false);
                }
            )
        }

        return deferred.promise;
    }


    ensureAuthIs(bool) {
        let deferred = this._$q.defer();

        this.verifyAuth().then((authValid) => {
            if (authValid !== bool) {
                this._$state.go('app.login')
                deferred.resolve(false);
            } else {
                deferred.resolve(true);
            }
        });

        return deferred.promise;
    }
}