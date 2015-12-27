/**
 * Created by aaronrussell on 10/30/15.
 * @Description: Model is a wrapper object used to create models that tie in with the NodeGeeks-Sails backend API
 * First the model initiating the Model wrapper
 */
angular.module('app').factory('Article', function (DS) {

    var Article = DS.Model();

    Article.define('article', {

        attributes: {

            headline: {
                type: 'string'
            },

            image: {
                type: 'string'
            },

            slug: {
                type: 'string'
            },

            author: {
                model: 'profile'
            },

            isScheduled: {
                type: 'boolean',
                defaultsTo: false
            },

            scheduledTime: {
                type: 'datetime'
            },

            content: {
                type: 'string'
            },

            comments: {
                collection: 'comment'
            },

            category: {
                model: 'category'
            },

            tags: {
                collection: 'tag'
            }
        }

    });

    return Article;

});