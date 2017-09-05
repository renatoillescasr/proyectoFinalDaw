var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'graph_stock';

	// Render the view
	view.render('graph_stock');
};
