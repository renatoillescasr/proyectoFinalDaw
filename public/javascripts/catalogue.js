function appendBrands(brands) {
  $brands = $('#despliegeMarcas');

  for (brand in brands) {
    $item = $('<li>');
    $item.appendTo($brands);

    $link = $('<a>',{
      href: '#',
    })
    $link.attr('data-brand', '/api/product/' + brands[brand] + '/list');
    $link.addClass('brand');
    $link.appendTo($item);

    $title = $('<span>',{
      text: brands[brand]
    });
    $title.addClass('activo');
    $title.appendTo($link);
  }
  handleBrand();
}

function appendProduct(store) {
  $gallery = $('#galeriaColeccion');

  $product = $('<div>');
  $product.addClass('col-md4 col-lg-4 col-xs-6 thumb');
  $product.appendTo($gallery);

  $title = $('<a>', {
    href: '/catalogue/' + store.slug,
    text: store.title
  });
  $title.appendTo($product);

  $link = $('<a>', {
    href: '/catalogue/' + store.slug
  });
  $link.addClass('thumbnail');
  $link.appendTo($product);

  $thumb = $('<figure>');
  $thumb.appendTo($link);

  $img = $('<img>', {
    src: store.image.url,
    width: 300,
    height: 300
  });
  $img.addClass('imageGaleria img-responsive gallerythumb');
  $img.appendTo($thumb);

  $info = $('<div>');
  $info.addClass('datosgaleria');
  $info.appendTo($product);

  $list = $('<ul>');
  $list.appendTo($info);

  $description = $('<li>');
  $description.text(store.description);
  $description.appendTo($list);

  $price = $('<li>');
  $price.addClass('costo');
  $price.text('$' + store.price);
  $price.appendTo($list);
}


$.get('/api/product/list', function(data){
  $brands = [];
  $.each(data.products, function(index, store){
    appendProduct(store);

    $brand = store.brand;
    if (!$brands.includes($brand)) $brands.push($brand);
  });

  appendBrands($brands);
});


function handleBrand() {
  $('.brand').click(function(e){
    e.preventDefault();

    url = $(this).attr('data-brand');
    console.log(url);

    $.get(url, function(data){
      $('#galeriaColeccion').empty();
      $.each(data.products, function(index, store){
        appendProduct(store);
      });
    });
  });
}
