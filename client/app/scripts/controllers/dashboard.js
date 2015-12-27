'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('app')
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
                App.initComponents(); // init core components

                // set default layout mode
                Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
            });
            $scope.$on('$includeContentLoaded', function () {
                Layout.initHeader(); // init header
                Layout.initSidebar(); // init sidebar
                Demo.init();
            });

            $rootScope.$on('$stateChangeSuccess', function() {
                debugger
                Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu
            });

            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });
