'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('blog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nodegeeks-angular',
    'door3.css'
]).constant('app', {
    name: 'Blog',
    domain: 'localhost:9000/#/',
    company: 'NodeGeeks LLC'
}).config(function ($routeProvider, $sailsProvider, $locationProvider) {
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
            controller: 'DashboardCtrl',
            data: {
                pageTitle: 'Dashboard',
                pageSubTitle: 'A Quick Look'
            }
        })
        .when('/dashboard/articles', {
            templateUrl: 'views/dashboard/articles.html',
            controller: 'ArticlesCtrl'
        })
        .when('/dashboard/profile', {
            templateUrl: 'views/dashboard/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/dashboard/inbox', {
            templateUrl: 'views/dashboard/inbox.html',
            controller: 'InboxCtrl'
        })
        .when('/dashboard/inbox/all', {
            templateUrl: 'views/dashboard/inbox/all.html',
            controller: 'InboxCtrl'
        })
        .when('/dashboard/inbox/messages', {
            templateUrl: 'views/dashboard/inbox/messages.html',
            controller: 'InboxCtrl'
        })
        .when('/dashboard/inbox/notifications', {
            templateUrl: 'views/dashboard/inbox/notifications.html',
            controller: 'InboxCtrl'
        })
        .when('/dashboard/inbox/:id', {
            templateUrl: 'views/dashboard/inbox/conversation.html',
            controller: 'ConversationCtrl'
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
}).run(function ($rootScope, Article, LocalStorage, Auth, $location, settings, app, $route) {

    $rootScope.state = '';
    $rootScope.$route = $route;
    $rootScope.$auth = Auth;
    $rootScope.settings = settings;
    $rootScope.app = app;

    var localProfile = LocalStorage.getItem('session');
    if (!localProfile && $location.url().includes('/dashboard')) {
        $location.url('/');
    } else if (localProfile && localProfile.token){
        Auth.validate(localProfile);
    }

    $rootScope.$on('$locationChangeStart', function (evt, newUrl, oldUrl, newState, oldState) {
        $rootScope.state = newUrl.includes('/dashboard') ? 'dashboard' : '';
        if (oldUrl !== newUrl && $rootScope.state == 'dashboard' && !$rootScope.session) {
            $location.url('/');
        }
    });
});
