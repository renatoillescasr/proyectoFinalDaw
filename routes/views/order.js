var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	locals = res.locals;

	locals.section = 'order';

	locals.filters = {
    order: req.params.order
  }
  locals.data = {
    order:[]
  }

	view.on('init', function(next) {
		var q = keystone.list('Order').model.findById(req.params.order);

		q.exec(function(err, result) {
			locals.data.order = result;
			next(err);
		});

	});

	view.render('myorder');
};
