$(document).ready(function() {
    $(".card").hover(
      function() {
        $(this).addClass("card-hover");
      },
      function() {
        $(this).removeClass("card-hover");
      }
    );
  });
  $(document).ready(function() {
    $(".card").click(function() {
      var solucion = $(this).attr("data-solucion");
      $(this).find(".card-title").text(solucion);
    });
  });
  
  