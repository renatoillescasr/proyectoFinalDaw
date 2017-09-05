function add_to_cart(product_id,product_price){
  var total = parseFloat($('#cart_total').html());
  var quantity = $('#quantity').val();
  total += parseInt(quantity) + parseFloat(product_price);

  $.get('/cartadd?product_id='+product_id+"&quantity"+quantity,function(string){
    $('#cart_total').html(total);
  });
}

$('#sub').click(function(){

  $user = $('#user').val();
  $product = $('#product').val();
  $order = $('#order').val();
  $size = $('#size').val();
  $qty = $('#quantity').val();

  $data = {
    user: $user,
    product: $product,
    order: $order,
    size: $size,
    qty: $qty
  };

  console.log($data);

  $.ajax({
      url: '/api/cart',
      type: 'post',
      dataType: 'json',
      data: $data,
      success: function( data ) {
        console.log(data);
        swal(
          'Carrito de Compras',
          'Se ha añadido al carrito correctamente',
          'success'
        )
      }, error: function( data ) {
        swal(
          'Carrito de Compras',
          data.responseText,
          'error'
        )
      }
    });


});
