var keystone = require('keystone');
//var Order = keystone.list('Order');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);

	var locals = res.locals;

	// Set locals
	locals.section = 'order';
	//locals.title = 'MyOrders';

	view.query('myorders', keystone.list('Order').model.find());

	// Render the view
	view.render('myorders');

};
