function authInterceptor(Session, AppConstants, $window, $q) {
    'ngInject'

    return {

        // automatically attach Authorization header
        request: function(config) {
            // console.log('authInterceptor request made');
            if (config.url.indexOf(AppConstants.api) === 0 && Session.get(AppConstants.jwtKey)) {
                config.headers.Authorization = 'bearer ' + Session.get(AppConstants.jwtKey);
            }
            
            return config;
        },

        // Handle 401
        responseError: function(rejection) {
            if (rejection.status === 401) {

                // clear any Session token being stored
                Session.end();
                
                // do a hard page refresh
                $window.location.reload();
            }
            return $q.reject(rejection);
        }
    }
}

export default authInterceptor;