// Obtener referencia al botón y al input de carga de archivos
const perfilButton = document.getElementById('perfil-button');
const perfilInput = document.getElementById('perfil-input');

// Agregar un evento de clic al botón para activar la carga de archivo cuando se haga clic en él
perfilButton.addEventListener('click', function() {
  perfilInput.click();
});

function activarEdicionNombre() {
  var nombreElement = document.getElementById("nombre-usuario");
  nombreElement.contentEditable = true;
  nombreElement.focus();
}

function guardarCambios() {
  var nombreElement = document.getElementById("nombre-usuario");
  nombreElement.contentEditable = false;
}

// Agregar un evento de clic al botón para activar la carga de archivo cuando se haga clic en él
perfilButton.addEventListener('click', function() {
  perfilInput.click();
});

function activarEdicionNombre() {
  var nombreElement = document.getElementById("nombre-usuario");
  nombreElement.contentEditable = "true";
  nombreElement.focus();
}

function desactivarEdicionNombre() {
  var nombreElement = document.getElementById("nombre-usuario");
  nombreElement.contentEditable = "false";
}

function guardarNombre() {
  var nombreElement = document.getElementById("nombre-usuario");
  var nuevoNombre = nombreElement.textContent.trim();

  desactivarEdicionNombre();
}

function intercambiarNoticias() {
  var noticiasContainer = document.querySelector(".noticias__cascada");
  var noticiasItems = noticiasContainer.getElementsByClassName("noticias__item");
  
  // Obtener el último elemento
  var ultimoElemento = noticiasItems[noticiasItems.length - 1];
  
  // Mover cada elemento un lugar hacia arriba
  for (var i = noticiasItems.length - 1; i > 0; i--) {
    noticiasContainer.insertBefore(noticiasItems[i - 1], noticiasItems[i]);
  }
  
  // Mover el último elemento al principio
  noticiasContainer.insertBefore(ultimoElemento, noticiasItems[0]);
}

// Agregar un evento de cambio al input de carga de archivos para cambiar el logo cuando se seleccione una imagen
perfilInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const newPerfil = e.target.result;
    const navPerfilImg = document.getElementById('principal__usuario-img');
    navPerfilImg.src = newPerfil;
    const navPerfilImgTop = document.getElementById('nav__img-perfil');
    navPerfilImgTop.src = newPerfil;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});
