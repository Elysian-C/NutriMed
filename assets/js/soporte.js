$(document).ready(function() {
  $(".card").click(function() {
    var solucion = $(this).data("solucion");
    $(this).html("<p class='solucion-text'>" + solucion + "</p>");
  });
});
