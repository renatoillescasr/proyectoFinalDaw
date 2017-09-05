var async = require('async'),
    keystone = require('keystone');

var User = keystone.list('User');


/**
 * Create a User
 */
exports.create = function(req, res) {

  var item = new User.model(),
    data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {

    if (err) return res.apiError('error', err);

    res.apiResponse({
      user: item
    });

  });
}

/**
 * Get User by ID
 */
exports.update = function(req, res) {
  User.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    var data = (req.method == 'POST') ? req.body : req.query;

    item.getUpdateHandler(req).process(data, function(err) {

      if (err) return res.apiError('create error', err);

      res.apiResponse({
        user: item
      });

    });

  });
}
