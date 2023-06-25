//Datos para las descripciones
const datosCSV = `titulo,descripcion
DESAYUNO: El desayuno es más que una simple comida, es un momento de celebración y gratitud. Es un regalo que nos brinda la oportunidad de comenzar el día con alegría, nutriendo nuestro cuerpo y alma. Cada bocado es una sinfonía de sabores y cada sorbo de café es una invitación a despertar nuestros sentidos.
ALMUERZO:El plato principal es una obra maestra culinaria, preparada con pasión y destreza. Un filete jugoso y tierno se sirve con una salsa delicada y seductora, acompañado de guarniciones que complementan a la perfección cada bocado. La carne se deshace en tu boca, liberando un torrente de sabores que te envuelve y te hace saborear el amor y el esmero con los que fue cocinada.
CENA:Y llega el momento dulce de la noche: el postre. Un manjar divino espera en el plato, una creación artística que deleita tanto la vista como el paladar. Un soufflé de chocolate caliente, esponjoso y decadente, se derrite en tu boca, liberando un torrente de sabores intensos y placenteros. Cada cucharada es una explosión de felicidad y deleite.`;

// Obtener todos los elementos con la clase "rectangulo"
const rectangulos = document.querySelectorAll('.rectangulo');

// Crear la ventana emergente
const ventanaEmergente = document.createElement('div');
ventanaEmergente.classList.add('ventana-emergente');
ventanaEmergente.style.display = 'none'; // Ocultar la ventana emergente al cargar la página

// Crear el contenido de la ventana emergente
const contenidoVentana = document.createElement('div');
contenidoVentana.classList.add('contenido-ventana');
ventanaEmergente.appendChild(contenidoVentana);

// Crear la imagen de la ventana emergente
const imagenEmergente = document.createElement('img');
contenidoVentana.appendChild(imagenEmergente);

// Crear el título de la ventana emergente
const tituloVentana = document.createElement('h2');
contenidoVentana.appendChild(tituloVentana);

// Crear la descripción de la ventana emergente
const descripcionVentana = document.createElement('p');
contenidoVentana.appendChild(descripcionVentana);

// Crear el botón de cierre de la ventana emergente
const botonCerrar = document.createElement('button');
botonCerrar.classList.add('boton-cerrar');
botonCerrar.innerHTML = 'X';
contenidoVentana.appendChild(botonCerrar);

// Agregar la ventana emergente al cuerpo del documento
document.body.appendChild(ventanaEmergente);

// Obtener la descripción correspondiente al título del rectángulo desde una variable
function obtenerDescripcionDesdeCSV(titulo) {
  const lineas = datosCSV.split('\n');
  for (let i = 1; i < lineas.length; i++) {
    const columna = lineas[i].split(':');
    if (columna[0] === titulo) {
      descripcionVentana.textContent = columna[1];
      return;
    }
  }
  descripcionVentana.textContent = 'No hay descripción disponible';
}

// Agregar un evento de clic a cada rectángulo
rectangulos.forEach(rectangulo => {
  rectangulo.addEventListener('click', function() {
    // Obtener la imagen y el título del rectángulo clicado
    const imagenSrc = rectangulo.querySelector('img').src;
    const titulo = rectangulo.querySelector('p').textContent;
    
    // Actualizar el contenido de la ventana emergente con los datos correspondientes
    imagenEmergente.src = imagenSrc;
    tituloVentana.textContent = titulo;
    
    // Obtener la descripción desde el archivo CSV
    console.log(obtenerDescripcionDesdeCSV(titulo));
    
    // Mostrar la ventana emergente
    ventanaEmergente.style.display = 'flex';
  });
});

// Agregar un evento de clic al botón de cierre para cerrar la ventana emergente
botonCerrar.addEventListener('click', function() {
  ventanaEmergente.style.display = 'none';
});
