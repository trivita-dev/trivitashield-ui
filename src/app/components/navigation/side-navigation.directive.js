function sideNavigation($timeout) {
    'ngInject';

    return {
        restrict: 'A',
        link: function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function() {
                element.metisMenu();
            });
        }
    };
}

export default sideNavigation;