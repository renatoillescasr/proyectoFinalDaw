var async = require('async'),
    keystone = require('keystone');

var Store = keystone.list('Store');


/**
 * List Products
 */
exports.list = function(req, res) {
    Store.model.find(function(err, items) {
        if (err) return res.apiError('database error', err);
        res.apiResponse({
            stores: items
        });
    });
}
