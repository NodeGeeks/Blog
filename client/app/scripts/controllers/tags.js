'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('app')
        .controller('TagsCtrl', function ($scope, Tag) {
            $scope.tags = Tag.find(25);
        });
