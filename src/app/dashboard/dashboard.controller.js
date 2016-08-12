class DashboardCtrl {
    constructor(Session, User, Dashboard, Sync, AppConstants, $scope) {
        'ngInject';

        this.uidKey = AppConstants.uidKey;
        this._Session = Session;
        this._$scope = $scope;

        this.contentTitle = 'Dashboard';
        this.contentDescr = 'Bacon ipsum dolor amet brisket bresaola beef tenderloin andouille, frankfurter short loin pork chop venison shoulder tail t-bone shank flank. Hamburger jerky shank ball tip cupim ribeye meatloaf capicola turducken meatball pastrami flank.';

        if (User.current) {

            // Bool: Verify if the session belongs to the current user
            this.isUser = (User.current.custId === this._Session.get('sub'));
        } else {
            this.isUser = false;
        }

        // Bind Sync Service to $ctrl
        this.sync = Sync.service.bind(Sync);

        Dashboard
        	.get(this._Session.get(this.uidKey))
        	.then(
        		(dashboard) => {
        			this.dashboardLoaded = true;
        			this.dashboard = dashboard;
        		}
    		);
    }
}

export default DashboardCtrl;