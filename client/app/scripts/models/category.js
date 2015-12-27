/**
 * Created by aaronrussell on 10/30/15.
 * @Description: Model is a wrapper object used to create models that tie in with the NodeGeeks-Sails backend API
 * First the model initiating the Model wrapper
 */
angular.module('app').factory('Category', function (DS) {

    var Category = DS.Model();

    Category.define('category', {

        attributes: {

            name: {
                type: 'string'
            },

            slug: {
                type: 'string'
            },

            articles: {
                collection: 'article'
            }
        }

    });

    return Category;

});