'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
        .controller('AuthCtrl', function ($scope, Auth, $rootScope) {
            //used to override the redirect url when logging in.
            $rootScope.loginRedirect = '/';
            $scope.loginFunc = function () {
                Auth.login($scope.user, $scope.password);
            };
            $scope.signup = Auth.signup;
            $scope.social = Auth.social;
            $scope.recover = Auth.recover;
            $scope.validate = Auth.validate;

            $scope.profile = {};

            $scope.$watchGroup(['profile.password', 'vPassword'], function () {
                $scope.signupDisabled = $scope.profile.password !== $scope.vPassword;
            });
        });
