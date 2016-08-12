import angular from 'angular';

// Create the module where our functionality can attach to
let hlplanModule = angular.module('app.hlplan', []);

// Include our UI-Router config settings
import HlPlanConfig from './hlplan.config';
hlplanModule.config(HlPlanConfig);

// Controllers
import HlPlanCtrl from './hlplan.controller';
hlplanModule.controller('HlPlanCtrl', HlPlanCtrl);

export default hlplanModule;