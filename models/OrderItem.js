var keystone = require('keystone');
var Types = keystone.Field.Types;

var OrderItem = new keystone.List('OrderItem',{
  noCreate: false,
  noedit:   false
});

OrderItem.add({
  product:  {
              type:     Types.Relationship,
              ref:      'Product',
              many:     false,
              index:    true,
              required: true,
              initial:  true
            },
  order:    {
              type:    Types.Relationship,
              ref:     'Order',
              many:    false,
              index:   true,
              initial: true
            },
  size:     {
              type:    String,
            },
  quantity: {
              type:    Types.Number,
              default: 1
            },
  price:    {
              type: Types.Number
            },
  discount: {
              type: Types.Number
            }
});

OrderItem.defaultSort = '-createdAt';
OrderItem.defaultColumns = 'product', 'order', 'quantity', 'price', 'discount';
OrderItem.register();
