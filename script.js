function obtenerNombre() {
  let nombre = document.getElementById("name").value;
  // console.log('El nombre ingresado es: ', nombre);

  if (nombre == "") {
    document.getElementById("mostrarNombre").innerText = "Ingrese su nombre";
  } else {
    let ocultar = document.querySelector(".formulario");
    ocultar.style.display = "none";

    let mostraCategoria = document.querySelector(".categorias");
    mostraCategoria.style.display = "flex";
    document.getElementById("mostrarNombre").innerText =
      "Bienvenida: " + nombre;
  }
}

function seleccionarCategoria(categoria) {
  // console.log(categoria);
  let mostraCategoria = document.querySelector(".categorias");
  mostraCategoria.style.display = "none";
  if (categoria === "categoria1") {
    // console.log("Seleccionaste Harry Potter");
    let mostrart1 = document.querySelector(".p1");
    mostrart1.style.display = "flex";
  } else {
    // console.log("Seleccionaste 2");
    let mostrart2 = document.querySelector(".p11");
    mostrart2.style.display = "block";
  }
}

function validarRespuestaP1() {
  let opciones = document.getElementsByName("respuesta");
  let respuestaCorrecta = "muggles";

  let seleccionado = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      var respuestaSeleccionada = opciones[i].value;
      break;
    }
  }

  if (seleccionado) {
    if (respuestaSeleccionada === respuestaCorrecta) {
      asignarTextoElemento("h3", "¡Respuesta correcta!");
    } else {
      asignarTextoElemento("h3", "¡Respuesta incorrecta!");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}

function siguientePreguntaP2() {
  asignarTextoElemento("h3", " ");
  ocultarElemento(".p1");
  mostrarElemento(".p2");
}

function ocultarElemento(elemento) {
  let ocultar = document.querySelector(elemento);
  ocultar.style.display = "none";
}
function mostrarElemento(elemento) {
  let mostrar = document.querySelector(elemento);
  mostrar.style.display = "block";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
function limpiarCaja() {
  document.querySelector("#name").value = "";
}
function validarRespuestaP2() {
  let opciones = document.getElementsByName("respuesta2");
  let respuestaCorrecta = "snitch";

  let seleccionado = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      var respuestaSeleccionada = opciones[i].value;
      break;
    }
  }

  if (seleccionado) {
    if (respuestaSeleccionada === respuestaCorrecta) {
      asignarTextoElemento("h3", "¡Respuesta correcta!");
    } else {
      asignarTextoElemento("h3", "¡Respuesta incorrecta!");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}
function siguientePreguntaP3() {
  asignarTextoElemento("h3", " ");
  ocultarElemento(".p2");
  mostrarElemento(".p3");
}

function validarRespuestaP3() {
  let opciones = document.getElementsByName("respuesta3");
  let respuestaCorrecta = "hedwig";

  let seleccionado = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      var respuestaSeleccionada = opciones[i].value;
      break;
    }
  }

  if (seleccionado) {
    if (respuestaSeleccionada === respuestaCorrecta) {
      asignarTextoElemento("h3", "¡Respuesta correcta!");
    } else {
      asignarTextoElemento("h3", "¡Respuesta incorrecta!");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}

function reiniciar1() {
  ocultarElemento(".p3");
  mostrarElemento(".formulario");
  limpiarCaja();
  asignarTextoElemento("h3", " ");
}

function validarRespuestaP11() {
  let opciones = document.getElementsByName("respuesta4");
  let respuestaCorrecta = "primrose";

  let seleccionado = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      var respuestaSeleccionada = opciones[i].value;
      break;
    }
  }

  if (seleccionado) {
    if (respuestaSeleccionada === respuestaCorrecta) {
      asignarTextoElemento("h3", "¡Respuesta correcta!");
    } else {
      asignarTextoElemento("h3", "¡Respuesta incorrecta!");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}

function siguientePreguntaP12() {
  asignarTextoElemento("h3", " ");
  ocultarElemento(".p11");
  mostrarElemento(".p12");
}
function validarRespuestaP12() {
  let opciones = document.getElementsByName("respuesta5");
  let respuestaCorrecta = "12";

  let seleccionado = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      var respuestaSeleccionada = opciones[i].value;
      break;
    }
  }

  if (seleccionado) {
    if (respuestaSeleccionada === respuestaCorrecta) {
      asignarTextoElemento("h3", "¡Respuesta correcta!");
    } else {
      asignarTextoElemento("h3", "¡Respuesta incorrecta!");
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}

function reiniciar2() {
  ocultarElemento(".p12");
  mostrarElemento(".formulario");
  limpiarCaja();
  asignarTextoElemento("h3", " ");
}
