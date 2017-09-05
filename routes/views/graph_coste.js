var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'graph_coste';

	// Render the view
	view.render('graph_coste');
};
