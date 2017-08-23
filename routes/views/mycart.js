var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function(req,res){

  var view = new keystone.View(req,res);
  var locals = res.locals;

  //set locals
  locals.section = 'mycart';
  locals.title = 'mycart';

  locals.items = req.session.cart;
  //Render the views
  view.render('mycart');
};
