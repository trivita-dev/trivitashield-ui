function spinner($timeout) {
    'ngInject';

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            name: '@?',
            group: '@?',
            show: '=?',
            imgSrc: '@?',
            register: '@?',
            onLoaded: '&?',
            onShow: '&?',
            onHide: '&?'
        },
        templateUrl: 'components/spinner.html',
        controller: ["$scope", "spinnerService", function($scope, spinnerService) {

            // register should be true by default if not specified.
            if (!$scope.hasOwnProperty('register')) {
                $scope.register = true;
            } else {
                $scope.register = !!$scope.register;
            }

            // Declare a mini-API to hand off to our service so the 
            // service doesn't have a direct reference to this
            // directive's scope.
            var api = {
                name: $scope.name,
                group: $scope.group,
                show: function() {
                    $scope.show = true;
                },
                hide: function() {
                    $scope.show = false;
                },
                toggle: function() {
                    $scope.show = !$scope.show;
                }
            };

            // Register this spinner with the spinner service.
            if ($scope.register === true) {
                spinnerService._register(api);
            }

            // If an onShow or onHide expression was provided,
            // register a watcher that will fire the relevant
            // expression when show's value changes.
            if ($scope.onShow || $scope.onHide) {
                $scope.$watch('show', function(show) {
                    if (show && $scope.onShow) {
                        $scope.onShow({
                            spinnerService: spinnerService,
                            spinnerApi: api
                        });
                    } else if (!show && $scope.onHide) {
                        $scope.onHide({
                            spinnerService: spinnerService,
                            spinnerApi: api
                        });
                    }
                });
            }

            // This spinner is good to go.
            // Fire the onLoaded expression if provided.
            if ($scope.onLoaded) {
                $scope.onLoaded({
                    spinnerService: spinnerService,
                    spinnerApi: api
                });
            }
        }]
    };
}

export default spinner;