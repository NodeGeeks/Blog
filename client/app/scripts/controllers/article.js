'use strict';

/**
 * @ngdoc function
 * @name app.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * ArticleCtrl of the app
 */
angular.module('blog')
        .controller('ArticleCtrl', function ($scope) {
            $scope.addComment = function() {
                $scope.article.comments.add({content: $scope.commentContent, author: $scope.session.id}).then(function(response){
                    debugger
                }, function (error){
                    console.error(error);
                })
            }
        });
