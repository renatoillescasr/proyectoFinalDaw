function add_to_cart(product_id,product_price){
  //alert(product_id+" "+ product_price);
  var total = parseFloat($('#cart_total').html());
  var quantity = $('#quantity').val();
  total += parseInt(quantity) + parseFloat(product_price);

  $.get('/cartadd?product_id='+product_id+"&quantity"+quantity,function(string){
    $('#cart_total').html(total);
  })
}
