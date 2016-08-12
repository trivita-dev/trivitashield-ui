class AppHeaderCtrl {
    constructor(User, $scope) {
        'ngInject';

        this._User = User;
        this.currentUser = User.current;

        $scope.$watch('User.current', (newUser) => {
            this.currentUser = newUser;
        });

        this.logout = User.logout.bind(User);
    }
}

let AppHeader = {
    controller: AppHeaderCtrl,
    templateUrl: 'layout/header.html'
};

export default AppHeader;