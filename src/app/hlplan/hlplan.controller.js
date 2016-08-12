class HlPlanCtrl {
    constructor(User, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;

        this.contentTitle = 'Healthy Living Plan';
        this.contentDescr = 'Bacon ipsum dolor amet brisket bresaola beef tenderloin andouille, frankfurter short loin pork chop venison shoulder tail t-bone shank flank. Hamburger jerky shank ball tip cupim ribeye meatloaf capicola turducken meatball pastrami flank.';
    }
}

export default HlPlanCtrl;