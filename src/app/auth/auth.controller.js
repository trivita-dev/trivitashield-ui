class AuthCtrl {
    constructor(User, Spinner, $state) {
        'ngInject';

        this._User = User;
        this._Spinner = Spinner;
        this._$state = $state;

        // TODO: Get Spinner Service Working
        this._Spinner = Spinner;

        this.title = $state.current.title;
        this.authType = $state.current.name.replace('app.', '');

    }

    submitForm() {
        this.isSubmitting = true;
        
        // TODO: Get Spinner Service Working
        // this._Spinner.show('authSpinner');

        this._User.attemptAuth(this.authType, this.formData).then(
            (res) => {
                // TODO: Get Spinner Service Working
                // this._Spinner.hide('authSpinner');
                this._$state.go('app.dashboard');
            },
            (err) => {
                this.isSubmitting = false;

                // TODO: Get Spinner Service Working
                // this._Spinner.hide('authSpinner');
                this.errors = err.data.errors;
            }
        )
    }
}

export default AuthCtrl;