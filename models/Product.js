var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
  map: {name: 'title'},
  singular: 'Product',
  plural: 'Products',
  autokey: {path:'slug', from:'title', unique:true}
});

Product.add({
  title: {type: String, required: true},
  brand: {type: String},
  price: {type: Number},
  //size:  {type: Types.Select, options: "S,M,L,XL"},
  qty_S: {type: Number},
  qty_M: {type: Number},
  qty_L: {type: Number},
  qty_XL: {type: Number},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
  pubishedDate: {type: Date, default: Date.now}
});

// lineas de ordenamienato
Product.defaultSort = '-createdAt';
//------
Product.defaultColumns = 'image, title, brand, price';
Product.register();
