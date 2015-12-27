'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('app')
        .controller('ArticlesCtrl', function ($scope, Article) {
            $scope.articles = Article.find(25);
        });
