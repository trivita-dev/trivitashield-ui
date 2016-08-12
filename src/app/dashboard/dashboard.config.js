function DashboardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard/@:id',
            controller: 'DashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'dashboard/dashboard.html',
            title: 'Dashboard',
            resolve: {
                auth: function(User) {
                    return User.ensureAuthIs(true);
                }
            }
        }
    );
};

export default DashboardConfig;