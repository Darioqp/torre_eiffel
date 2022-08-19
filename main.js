let dibujo = document.getElementById("canva");
let lienzo = dibujo.getContext("2d");
let lineas = document.getElementById("inputLineas");
let boton = document.getElementById("botonDibujar");

boton.addEventListener("click", DibujarTorre);

function DibujarTorre(x1, y1, x2, y2) {
  let color = document.getElementById("InputColor");
  lienzo.beginPath();
  lienzo.strokeStyle = "color.value";
  lienzo.moveTo(0, 0);
  lienzo.lineTo(400, 400);
  lienzo.stroke();
  lienzo.closePath();
}
