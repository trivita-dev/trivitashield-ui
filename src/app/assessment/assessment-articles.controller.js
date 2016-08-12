class AssessmentArticlesCtrl {
    constructor(assessment, $state, $rootScope) {
        'ngInject';

        // The assessment page, resolved by UI Router
        this.assessment = assessment;

        this.assessmentState = $state.current.name.replace('app.assessment.', '');

        // List types can be 'accordian', pills', 'nav-pills', or 'nav-tabs'
        this.listConfig = { type: 'nav-tabs' };

        // Set State filters and values
        switch (this.assessmentState) {
            case 'personal':
                this.listConfig.filters = {
                    templateUrl: '';
                };
                break;
            
            case 'nutrition':
                this.listConfig.filters = {
                    // TODO: Configure state filters, for example
                    // username: this.assessment.firstname
                };
                break;

            case 'lifestyle':
                this.listConfig.filters = {
                    // TODO: Configure state filters, for example
                    // username: this.assessment.firstname
                };
                break;

            case 'measurements':
                this.listConfig.filters = {
                    // TODO: Configure state filters, for example
                    // username: this.assessment.firstname
                };
                break;

            case 'medical':
                this.listConfig.filters = {
                    // TODO: Configure state filters, for example
                    // username: this.assessment.firstname
                };
                break;
            
            default:
                // TODO: Return Unknown State Error
                return;
        }

        $rootScope.getArticleData('@' + this.assessment.id);
    }
}

export default AssessmentArticlesCtrl;