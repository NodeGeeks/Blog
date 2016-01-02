'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('blog')
        .controller('AuthCtrl', function ($scope, $rootScope, $routeParams, LocalStorage) {
            var rememberedLogin = LocalStorage.getItem('remembered-login');
            if (rememberedLogin) {
                $scope.user = rememberedLogin;
                $scope.remember = true;
            }
            $scope.loginFunc = function () {
                $scope.remember ? LocalStorage.setItem('remembered-login', $scope.user) : LocalStorage.removeItem('remembered-login');
                $scope.$auth.login($scope.user, $scope.password);
            };
            $scope.signup = $scope.$auth.signup;
            $scope.social = $scope.$auth.social;
            $scope.recover = $scope.$auth.recover;
            $scope.reset = function() {
                $scope.$auth.reset($routeParams.id, $scope.password, $routeParams.resetPasswordHash);
            };
            $scope.validate = $scope.$auth.validate;

            $scope.profile = {};

            $scope.$watchGroup(['profile.password', 'vPassword'], function () {
                $scope.passwordMismatch = $scope.profile.password !== $scope.vPassword;
            });
        });
