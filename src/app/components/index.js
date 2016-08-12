import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// TODO: Get the Spinner Service working
// import Spinner from './spinner.directive';
// componentsModule.directive('spinner', Spinner);

import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import IboxTools from './ibox/ibox-tools.directive';
componentsModule.directive('iboxTools', IboxTools);

import IboxToolsFullScreen from './ibox/iboxtools-fullscreen.directive';
componentsModule.directive('iboxToolsFullScreen', IboxToolsFullScreen);

import SideNavigation from './navigation/side-navigation.directive';
componentsModule.directive('sideNavigation', SideNavigation);

import MinimalizaSidebar from './navigation/minimaliza-sidebar.directive';
componentsModule.directive('minimalizaSidebar', MinimalizaSidebar);

import TabSet from './tabs/tabset.directive';
componentsModule.directive('tabset', TabSet);

import Tab from './tabs/tab.directive';
componentsModule.directive('tab', Tab);

export default componentsModule;