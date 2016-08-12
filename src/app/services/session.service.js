export default class Session {
    constructor($window) {
        'ngInject';

        this._$window = $window;
    }

    // JWT Handler to Parse and Output Payload
    jwt(token, deligate) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');

        const jwtPayload = JSON.parse(this._$window.atob(base64));

        for (const key of Object.keys(jwtPayload)) {
            if (key !== undefined) {
                switch (deligate) {
                    case 'api':
                        // TODO: Output JWT Payload Key/Value pairs to a webservice
                        break;
                    
                    case 'console':
                        // Output JWT Payload Key/Value pairs to the console
                        console.log(key + ": " + jwtPayload[key]);
                        break;

                    case 'cookie':
                        // TODO: Output JWT Payload Key/Value pairs to a cookie
                        break;

                    case 'database':
                        // TODO: Output JWT Payload Key/Value pairs to a database
                        break;

                    case 'localstorage':
                        // Output JWT Payload Key/Value pairs to LocalStorage
                        this._$window.localStorage[key] = jwtPayload[key];
                        break;
                    
                    default:
                        // Return JWT Payload as Object Array
                        return jwtPayload;
                }
            }
        }
    }

    // LocalStorage Handlers
    set(k, v) {
        this._$window.localStorage.setItem(k, v);
    }

    get(k) {
        return this._$window.localStorage.getItem(k);
    }

    del(k) {
        this._$window.localStorage.removeItem(k);
    }

    end() {
        return this._$window.localStorage.clear();
    }
}