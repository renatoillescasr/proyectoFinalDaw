var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order',{
  noCreate: true,
  noedit:   true
});

Order.add({
  owner:          {
                      type:     Types.Relationship,
                      ref:      'User',
                      many:     false,
                      index:    true,
                      required: true,
                      initial:  true
                  },
  status:         {
                    type:    Types.Select,
                    numeric: true,
                    options: [
                              {
                                value: 1,
                                label: 'Pendiente'
                              },
                              {
                                value: 2,
                                label: 'En Proceso'
                              },
                              { value: 3,
                                label: 'Entregado'
                              },
                              { value: 4,
                                label: 'Cancelado'
                              }
                             ],
                    default: 1
                  },
  date_pruchased: {
                    type: Date
                  },
  date_created:   {
                    type: Date,
                    default: Date.now
                  }
});

Order.defaultSort = '-date_created';
Order.defaultColumns = 'owner, status';
Order.register();
