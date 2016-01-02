/**
 * Created by aaronrussell on 10/30/15.
 * @Description: Model is a wrapper object used to create models that tie in with the NodeGeeks-Sails backend API
 * First the model initiating the Model wrapper
 */
angular.module('blog').factory('Model', function (DS) {

    var Model = DS.Model();

    Model.define('model', {

        attributes: {
            
        }

    });

    return Model;

});