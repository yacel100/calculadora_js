let valorUno = 0;
let valorFinal = 0;

const display = document.getElementById('display');

const boton1 = document.getElementById('1');
boton1.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '1';
});

const boton2 = document.getElementById('2');
boton2.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '2';
});

const botonMas = document.getElementById('+');
botonMas.addEventListener('click', function () {
  valorUno = parseInt(display.innerHTML);
  display.innerHTML = '';
});

const botonIgual = document.getElementById('=');
botonIgual.addEventListener('click', function () {
  valorFinal = parseInt(display.innerHTML);
  display.innerHTML = valorUno + valorFinal;
});
