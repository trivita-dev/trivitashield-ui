class SettingsCtrl {
    constructor(User, $state) {
        'ngInject';

        this._User = User;
        this._$state = $state;

        this.formData = {
            firstname: User.current.firstname,
            lastname: User.current.lastname,
            email: User.current.email,
            password: '',
            confirm: ''
        }
    }

    submitForm() {
        if (this.formData.password === this.formData.confirm) {
            this.isSubmitting = true;
            this._User.update(this.formData).then(
                (user) => {
                    this._$state.go('app.profile', { id: user.id })
                },
                (err) => {
                    this.isSubmitting = false;
                    this.errors = err.data.errors;
                }
            )
        } else {
            this.isSubmitting = false;
            this.errors = 'Password and Confirm Password do not match!';
            this._$state.go('app.settings', { id: user.id })
        }
    }
}

export default SettingsCtrl;