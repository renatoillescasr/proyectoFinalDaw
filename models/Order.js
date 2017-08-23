var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order',{
  noCreate:true,
  noedit: true
});

Order.add({
  customer: {type: Types.Relationship, ref:'Y', many:false, required: true, initial:true},
  items: {type: Types.Relationship, ref:'OrderItem', many:true, index: true, required: true, initial:true}
});

Order.defaultSort = '-createdAt';
Order.defaultColumns = 'customer, Products';
Order.register();
