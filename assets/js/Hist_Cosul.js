$(document).ready(function() {
    $(".card").hover(
      function() {
        $(this).css("transform", "scale(1.1)");
        $(this).css("z-index", "1");
        $(this).css("box-shadow", "0 0 10px rgba(0,0,0,0.3)");
        $(this).css("transition", "transform 0.2s ease");
      },
      function() {
        $(this).css("transform", "");
        $(this).css("z-index", "");
        $(this).css("box-shadow", "");
        $(this).css("transition", "");
      }
    );
  });
  document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".card");
  
    function handleClick(event) {
      event.preventDefault();
  
      var nombre = this.getAttribute("data-nombre");
      var estado = this.getAttribute("data-estado");
      var fecha = this.getAttribute("data-fecha");
  
      var button = this;
  
      var infoCita = "<h3>" + nombre + "</h3>";
      infoCita += "<p><strong>Estado:</strong> " + estado + "</p>";
      infoCita += "<p><strong>Fecha:</strong> " + fecha + "</p>";
  
      button.innerHTML = infoCita;
  
      if (estado === "Cancelada") {
        button.classList.add("cita-cancelada");
      } else {
        button.classList.remove("cita-cancelada");
      }
    }
  
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", handleClick);
    }
  });
  