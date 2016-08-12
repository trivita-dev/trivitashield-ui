export default class Sync {
    constructor($http, $state, $q) {
        'ngInject';

        this._$http = $http;
        this._$state = $state;
        this._$q = $q;

        this.current = null;
    }

    service(deligate) {
        switch (deligate) {
            case 'fitBit':
                // TODO: GET: fitBit webservice
                console.log('NOTICE: Sync with FitBit service has been called.');
                break;
            
            case 'baseHealth':
                // TODO: GET: Basehealth webservice
                console.log('NOTICE: Sync with Basehealth service has been called.');
                break;

            default:
                // No Service Available or Specified
                console.log('NOTICE: Unable to sync specified service.');
        }

         return;
    }
}