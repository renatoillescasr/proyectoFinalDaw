var keystone = require('keystone');
var Order = keystone.list('Order');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'myorders';
	locals.title = 'MyOrders';

	//view.query('myorders', keystone.list('Order').model.find());

	view.on('init', function(next){
		Order.paginate({
			page: req.query.page || 1,
			perPage: 2,
			maxPages:10
		})
		.where('customer',req.user.id)
		.sort('=publisheDate')
		.populate('customer')
		.exec(function(err, res){
			locals.Orders = res;
			next(err);
		});
	});

	// Render the view
	view.render('myorders');

};
