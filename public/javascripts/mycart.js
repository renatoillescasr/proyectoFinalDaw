$( document ).ready(function() {

  console.log("hola");
  $.getJSON('/api/cart', function(data) {
    data.products.forEach(function(item){

      let content = '<tr>' +
            '<td> <img src="http://res.cloudinary.com/dawcatalogo/image/upload/v1504585551/dkzdmmaxea0n9drlydhp.jpg" height="100" width="100"> </td>' +
                 '<td>' + item.order + '</td>' +
                 '<td>' + item.product + '</td>' +
                 '<td>' + item.price + '</td>' +
                 '<td>' + item.size + '</td>' +
                 '<td>' + item.quantity + '</td>' +
                 '</tr>';
      $('#lugar').append(content);

    });
  });
});
