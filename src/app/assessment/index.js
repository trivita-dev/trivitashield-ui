import angular from 'angular';

// Create the module where our functionality can attach to
let assessmentModule = angular.module('app.assessment', []);

// Include our UI-Router config settings
import AssessmentConfig from './assessment.config';
assessmentModule.config(AssessmentConfig);

// Controllers
import AssessmentCtrl from './assessment.controller';
assessmentModule.controller('AssessmentCtrl', AssessmentCtrl);

export default assessmentModule;