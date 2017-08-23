var keystone = require('keystone');
var async = require('async');
var Order = keystone.list('Order');
var OrderItem = keystone.list('OrderItem');

exports = module.exports = function(req,res){
  var view = new keystone.View(req,res);
  var locals = res.locals;

  var finallydo = function(){
    res.redirect('/');
  }
  if(req.session.cart != undefined){
    mycart_item_ids = [];
    async.forEach(req.session.cart, function(item, callback){
      console.log(JSON.stringify(item));
      oitem = new OrderItem.model({
        product: item.product._id,
        quantity: item.product.quantity,
        price: item.product.price,
        discount: 0
      });

      oitem.save(function(err){
        if(err){
          console.log('Error al crear la orden', err);
        }else{
          mycart_item_ids.push(oitem._id);
        }
        callback();
      });
    }, function(){
      console.log("realizado");
      var newOrder = Order.model({
        customer: req.user.id,
        items: mycart_item_ids
      });
      updater = newOrder.getUpdateHandler(req,res,{
        errorMessage:'Error al crear la orden'
      });

      updater.process(req.body, {
        flashErrors: true,
        logErrors: true,
      },function(err){
        if(err){
          //error
        }else{
          req.session.cart=[];
          res.redirect('myorders')
        }
      });
    });
  }else{
    res.redirect('/');
  }
};
