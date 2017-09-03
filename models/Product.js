var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
  map:      {
              name: 'title'
            },
  singular: 'Product',
  plural:   'Products',
  autokey:  {
              path:'slug',
              from:'title',
              unique:true
            }
});

Product.add({
  title:        {
                  type:     String,
                  required: true
                },
  brand:        {
                  type:     String,
                },
  price:        {
                  type:     Number,
                },
  discount:     {
                  type: Types.Number
                },
  color:        {
                  type:     String,
                },
  qty_S:        {
                  type:    Number,
                  default: 0
                },
  qty_M:        {
                  type:    Number,
                  default: 0
                },
  qty_L:        {
                  type:    Number,
                  default: 0
                },
  qty_XL:       {
                  type:    Number,
                  default: 0
                },
  description:  {
                  type:    Types.Html,
                  wysiwyg: true,
                  height:  300,
                },
  image1:       {
                  type: Types.CloudinaryImage,
                },
  image2:       {
                  type: Types.CloudinaryImage,
                },
  image3:       {
                  type: Types.CloudinaryImage,
                },
  date_created: {
                  type:    Date,
                  default: Date.now
                }
});

Product.defaultSort = '-date_created';
Product.defaultColumns = 'image1, title, brand, price, published_date';
Product.register();
