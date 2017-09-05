var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'products';

	// Render the view
	view.render('products');
};


/**
 * Get Product by Slug
 */
exports.get = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'products';

	// Render the view
  view.query('pending_cart', keystone.list('Order').model.findOne({'status': 1}));
  view.query('process_cart', keystone.list('Order').model.findOne({'status': 2}));
  view.query('finish_cart', keystone.list('Order').model.findOne({'status': 3}));

  view.query('product', keystone.list('Product').model.findOne({'title': req.params.slug}));
	view.render('product');

}
