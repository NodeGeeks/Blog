'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
        .controller('AuthCtrl', function ($scope, Auth, $rootScope, $routeParams) {
            //used to override the redirect url when logging in.
            $scope.loginFunc = function () {
                Auth.login($scope.user, $scope.password).then(function(){
                    var session = $rootScope.session;
                });
            };
            $scope.signup = Auth.signup;
            $scope.social = Auth.social;
            $scope.recover = Auth.recover;
            $scope.reset = function() {
                Auth.reset($routeParams.id, $scope.password, $routeParams.resetPasswordHash);
            };
            $scope.validate = Auth.validate;

            $scope.profile = {};

            $scope.$watchGroup(['profile.password', 'vPassword'], function () {
                $scope.passwordMismatch = $scope.profile.password !== $scope.vPassword;
            });
        });
