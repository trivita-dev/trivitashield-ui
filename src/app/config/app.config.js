import authInterceptor from './auth.interceptor'

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $httpProvider.interceptors.push(authInterceptor);

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'layout/app-view.html',
            resolve: {
                auth: function(User) {
                    return User.verifyAuth();
                }
            }
        });

    $urlRouterProvider.otherwise('/login');
}

export default AppConfig;