$("#sub").click(function(event) {

  /* stop form from submitting normally */
  event.preventDefault();

  var p1 = $('#password').val();
  var p2 = $('#password_confirmation').val();
  var first_name = $('#first_name').val();
  var last_name = $('#last_name').val();
  var email = $('#email').val();
  var address = $('#address').val();


  if (first_name == "" || last_name == "" || email == "" || address == "" || p1 == "" || p2 == "") {
    swal(
      'Registo de Usuario',
      'Complete todos los campos',
      'warning'
    )

  } else if (p1 != p2) {
    swal(
      'Registo de Usuario',
      'Las contraseñas no coinciden',
      'warning'
    )

  } else {

    /* get the action attribute from the <form action=""> element */
    var $form = $('#sign_up'),
        url = $form.attr( 'action' );
    console.log($('form#sign_up').serialize());
    /* Send the data using post with element id name and name2*/
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      data: $('form#sign_up').serialize(),
      success: function( data ) {
        swal({
          title: 'Registo de Usuario',
          text: 'Se ha registrado correctamente',
          type: 'success',
          timer: 1500
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer') {
              window.location.href = $('#redirect').val();
            }
          }
        )

      }, error: function( data ) {
        swal(
          'Registo de Usuario',
          data.responseText,
          'error'
        )
      }
    });
  }
});
