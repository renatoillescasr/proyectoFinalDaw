var async = require('async'),
    keystone = require('keystone');

var Product = keystone.list('Product');


/**
 * List Products
 */
exports.list = function(req, res) {
    Product.model.find(function(err, items) {
        if (err) return res.apiError('database error', err);
        res.apiResponse({
            products: items
        });
    });
}


/**
 * List Products by Brand
 */
exports.brand_list = function(req, res) {
    Product.model.find({brand: req.params.brand},function(err, items) {
        if (err) return res.apiError('database error', err);
        res.apiResponse({
            products: items
        });
    });
}
