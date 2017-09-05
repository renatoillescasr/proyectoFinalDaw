var keystone = require('keystone');
var Types = keystone.Field.Types;

var Store = new keystone.List('Store',{
  singular: 'Tienda',
  plural:   'Tiendas',
});

Store.add({
  name:           {
                    type:     String,
                    required: true,
                  },
  address:        {
                    type:     String
                  },
  latitude:       {
                    type:     Number
                  },
  longitude:      {
                    type:     Number
                  },
  date_created:   {
                    type:     Date,
                    default:  Date.now
                  }
});

Store.defaultSort = '-date_created';
Store.defaultColumns = 'name, address, date_created';
Store.register();
