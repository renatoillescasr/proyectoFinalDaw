var keystone = require('keystone');
var Types = keystone.Field.Types;

var OrderItem = new keystone.List('OrderItem',{
  noCreate:true,
  noedit:true
});

OrderItem.add({
  product:{ type: Types.Relationship, ref:'Product', many:false, index:true, required:true, initial:true},
  quantity: { type: Types.Number, default:1},
  price: { type: Types.Number},
  discount: { type: Types.Number}
});

OrderItem.defaultSort = '-createdAt';
OrderItem.defaultColumns = 'name, email, OrderItemType, createdAt';
OrderItem.register();
