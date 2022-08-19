let dibujo = document.getElementById("canva");
let lienzo = dibujo.getContext("2d");
let lineas = document.getElementById("inputLineas");
let boton = document.getElementById("botonDibujar");

boton.addEventListener("click", DibujarTorre);

function DibujarLinea(color, x1, y1, x2, y2) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}

function DibujarTorre() {

  let numeroDeLineas = lineas.value;
  let delta = dibujo.width / numeroDeLineas;

  for (n=0; n <= numeroDeLineas ; n++) {

    DibujarLinea("red", 0, delta*n, delta*n, 400)
    DibujarLinea("blue", delta*n, 0, 400, delta*n)

  }
  
}