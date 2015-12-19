'use strict';

/**
 * @ngdoc function
 * @name app.controller:SetupCtrl
 * @description
 * # ControllerCtrl
 * Controller of the app
 */
angular.module('app')
        .directive('formWizardStepInput', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/nodegeeks/directives/form-wizard-step-input.html',
                scope: {
                    property: '=',
                    label: '@',
                    placeholder: '@',
                    type: '@',
                    col: '@'
                }
            };
        });
