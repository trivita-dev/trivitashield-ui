function ProfileConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.profile', {
            url: '/profile/@:id',
            controller: 'ProfileCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'profile/profile.html',
            resolve: {
                auth: function(User) {
                    return User.ensureAuthIs(true);
                }
            }
        })
};

export default ProfileConfig;