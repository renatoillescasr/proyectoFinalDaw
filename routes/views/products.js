var keystone = require('keystone');

exports = module.exports = function(req, res){
  var view = new keystone.View(req,res);
  var locals = res.locals;

  // coloco locals
  locals.section = 'store';

  //cargo local
  view.query('products', keystone.list('Product').model.find());

  // Render a views
  view.render('products');

}
