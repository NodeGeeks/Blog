/**
 * Created by aaronrussell on 10/30/15.
 * @Description: Model is a wrapper object used to create models that tie in with the NodeGeeks-Sails backend API
 * First the model initiating the Model wrapper
 */
angular.module('blog').factory('Comment', function (DS) {

    var Comment = DS.Model();

    Comment.define('comment', {

        attributes: {

            content: {
                type: 'string'
            },

            author: {
                model: 'profile'
            },

            replies: {
                collection: 'comment'
            }
        }

    });

    return Comment;

});