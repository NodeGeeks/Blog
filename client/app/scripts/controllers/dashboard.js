'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('blog')
        .controller('DashboardCtrl', function ($scope, $rootScope) {
            $scope.handleSearch = function (evt) {
                if (!evt.currentTarget.classList.contains('open')) {
                    $scope.searchOpen = true;
                    angular.element(evt.currentTarget).find('.form-control').focus();
                    angular.element(evt.currentTarget).find('.form-control').focusout(function () {
                        $scope.searchOpen = false;
                    });
                }

            };
            $scope.$on('$viewContentLoaded', function () {
                App.initComponents();
                Layout.init();
            });
            $scope.$on('$includeContentLoaded', function () {
                Layout.initHeader();
                Layout.initSidebar();
                Demo.init();
            });

            $rootScope.$on('$stateChangeSuccess', function() {
                Layout.setSidebarMenuActiveLink('match'); // sets active link in the sidebar menu
            });

            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });
