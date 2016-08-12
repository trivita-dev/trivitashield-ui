function AssessmentConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.assessment', {
            url: '/assessment',
            controller: 'AssessmentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'assessment/assessment.html',
            title: 'Assessment',
            resolve: {
                auth: function(User) {
                    return User.ensureAuthIs(true);
                }
            }
        });
};

export default AssessmentConfig;


// TODO: Assessment needs to be abstract state and tabs state is controlled trhough it
// function AssessmentConfig($stateProvider) {
//     'ngInject';

//     $stateProvider
//         .state('app.assessment', {
//             abstract: true,
//             url: '/:slug',
//             controller: 'AssessmentCtrl',
//             controllerAs: '$ctrl',
//             templateUrl: 'assessment/assessment.html',
//             title: 'Assessment',
//             resolve: {
//                 article: function(Assessments, $state, $stateParams) {
//                     return Assessments.get($stateParams.slug).then(
//                         (assessment) => assessment,
//                         (err) => $state.go('app.login')
//                     )
//                 }
//             }
//         });
// };

// export default AssessmentConfig;