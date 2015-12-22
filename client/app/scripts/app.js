'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSails',
    'door3.css'
]).config(function ($routeProvider, $sailsProvider, $locationProvider) {
    $sailsProvider.url = 'http://localhost:1337';
    //todo: add statement that checks if its served up or being built, if serve hit local api, if build --environment
    $routeProvider
            .when('/login', {
                templateUrl: 'views/nodegeeks/login.html',
                controller: 'AuthCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/nodegeeks/signup.html',
                controller: 'AuthCtrl'
            })
            .when('/recover', {
                templateUrl: 'views/nodegeeks/recover.html',
                controller: 'AuthCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/nodegeeks/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/setup', {
                templateUrl: 'views/nodegeeks/setup.html',
                controller: 'SetupCtrl'
            })
            .when('/', {
                templateUrl: 'views/nodegeeks/blog.html',
                controller: 'BlogCtrl'
            })
            .when('/:slug', {
                templateUrl: 'views/nodegeeks/article.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
}).run(function ($rootScope, App, LocalStorage, Auth) {
            App.findAll(1).then(function (apps) {
                $rootScope.app = apps[0];
            });
            $rootScope.logout = Auth.logout;
            var localProfile = LocalStorage.getItem('session');
            if (localProfile) {
                Auth.validate(localProfile);
            }
        }
);
