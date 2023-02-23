
$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  // SHOW HIDE PANLES
  $("#btn-show-validar-correo").click(function() {
    $("#fs-registro-correo").hide();
    $("#fs-registro-validar-correo").show();
    $("#fs-registro-cuenta").hide();
  });

  $("#btn-show-completar-cuenta").click(function() {
    $("#fs-registro-correo").hide();
    $("#fs-registro-validar-correo").hide();
    $("#fs-registro-cuenta").show();
  });
  // END SHOW HIDE PANELS

});
