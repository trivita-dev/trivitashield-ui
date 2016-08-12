import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
servicesModule.service('User', UserService);

import SessionService from './session.service'
servicesModule.service('Session', SessionService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import SpinnerService from './spinner.service';
servicesModule.service('Spinner', SpinnerService);

import DashboardService from './dashboard.service';
servicesModule.service('Dashboard', DashboardService);

import SyncService from './sync.service';
servicesModule.service('Sync', SyncService);

export default servicesModule;