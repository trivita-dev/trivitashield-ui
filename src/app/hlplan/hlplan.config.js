function HlPlanConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.hlplan', {
            url: '/hlplan',
            controller: 'HlPlanCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'hlplan/hlplan.html',
            title: 'Healthy Living Plan',
            resolve: {
                auth: function(User) {
                    return User.ensureAuthIs(true);
                }
            }
        });
};

export default HlPlanConfig;