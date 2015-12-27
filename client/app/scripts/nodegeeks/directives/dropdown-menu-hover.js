'use strict';

/**
 * @ngdoc function
 * @name app.controller:SetupCtrl
 * @description
 * # ControllerCtrl
 * Controller of the app
 */
angular.module('app')
        .directive('dropdownMenuHover', function () {
            return {
                link: function (scope, elem) {
                    elem.dropdownHover();
                }
            };
        });