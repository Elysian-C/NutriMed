var fecha = new Date();
var hora = fecha.getHours();

var saludo = "";
if (hora >= 5 && hora < 12) {
  saludo = "¡Buenos días,";
} else if (hora >= 12 && hora < 18) {
  saludo = "¡Buenas tardes,";
} else {
  saludo = "¡Buenas noches,";
}

document.getElementById("saludo").innerHTML = saludo;