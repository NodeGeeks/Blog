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
            .when('/resetPassword/:id/:resetPasswordHash', {
                templateUrl: 'views/nodegeeks/resetPassword.html',
                controller: 'AuthCtrl'
            })
            .when('/profile/:username', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/dashboard/articles', {
                templateUrl: 'views/dashboard/articles.html',
                controller: 'ArticlesCtrl'
            })
            .when('/dashboard/profile', {
                templateUrl: 'views/dashboard/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/dashboard/article/:id', {
                templateUrl: 'views/dashboard/article/new.html',
                controller: 'ArticleCtrl'
            })
            .when('/dashboard/article/new', {
                templateUrl: 'views/dashboard/article/new.html',
                controller: 'ArticleCtrl'
            })
            .when('/dashboard/categories', {
                templateUrl: 'views/dashboard/categories.html',
                controller: 'CategoriesCtrl'
            })
            .when('/dashboard/category/:id', {
                templateUrl: 'views/dashboard/category/new.html',
                controller: 'CategoryCtrl'
            })
            .when('/dashboard/category/new', {
                templateUrl: 'views/dashboard/category/new.html',
                controller: 'CategoryCtrl'
            })
            .when('/dashboard/tags', {
                templateUrl: 'views/dashboard/tags.html',
                controller: 'TagsCtrl'
            })
            .when('/dashboard/tag/:id', {
                templateUrl: 'views/dashboard/tag/new.html',
                controller: 'TagCtrl'
            })
            .when('/dashboard/tag/new', {
                templateUrl: 'views/dashboard/tag/new.html',
                controller: 'TagCtrl'
            })
            .when('/setup', {
                templateUrl: 'views/nodegeeks/setup.html',
                controller: 'SetupCtrl'
            })
            .when('/', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl'
            })
            .when('/:slug', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
}).run(function ($rootScope, App, LocalStorage, Auth, $location, settings) {

    $rootScope.state = '';
    $rootScope.$auth = Auth;
    $rootScope.$on('$locationChangeSuccess', function(evt, newUrl, oldUrl, newState, oldState){
        $rootScope.state = newUrl.includes('/dashboard') ? 'dashboard' : '';
    });
    $rootScope.$settings = settings;
    App.findAll(1).then(function (apps) {
        $rootScope.app = apps[0];
    });
    var localProfile = LocalStorage.getItem('session');
    if (localProfile) {
        Auth.validate(localProfile);
    }
});
