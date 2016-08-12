class ProfileCtrl {
    constructor(profile, User) {
        'ngInject';

        this.profile = profile;

        if (User.current) {
            // console.log('this.profile = ' + JSON.stringify(this.profile));
            this.isUser = (User.current.id === this.profile.id);
        } else {
            this.isUser = false;
        }

    }
}


export default ProfileCtrl;