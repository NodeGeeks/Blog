'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('app')
        .controller('TagCtrl', function ($scope, Article) {
            $scope.articles = Article.find(25);
        });
