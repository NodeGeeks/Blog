/**
 * File.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

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
            collection: 'tag',
            via: 'articles'
        }
    }
};

