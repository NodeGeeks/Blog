'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('blog')
        .controller('CategoriesCtrl', function ($scope, Category) {
            $scope.categories = Category.find(25);
        });
