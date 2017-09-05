var async = require('async'),
    keystone = require('keystone');

var Order = keystone.list('Order');
var OrderItem = keystone.list('OrderItem');
var User = keystone.list('User');


/**
 * Order
 */
exports.add = function(req, res) {

  var order = Order.model();
  var order_id = req.body.order;
  var user = req.body.user;

  if (order_id == 0) {
    user = User.model.findById(user, function(err, u){
      if (err) return res.apiError('error', err);
      data = {owner: u._id};
      console.log(data);

      order.getUpdateHandler(req).process(data, function(err) {

        if (err) return res.apiError('error', err);

        var order_item = new OrderItem.model();

        res.apiResponse({
          order: order
        });
      });
    });

  }
}

exports.get = function(req, res){

    OrderItem.model.find(function(err, items) {
        if (err) return res.apiError('database error', err);
        res.apiResponse({
            products: items
        });
    });
}
