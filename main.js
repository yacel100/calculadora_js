let valorUno = 0;
let valorFinal = 0;

const display = document.getElementById('display');


//Botones calculadora
const boton1 = document.getElementById('1');
boton1.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '1';
});

const boton2 = document.getElementById('2');
boton2.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '2';
});
const boton3 = document.getElementById('3');
boton3.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '3';
});
const boton4 = document.getElementById('4');
boton4.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '4';
});
const boton5 = document.getElementById('5');
boton5.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '5';
});

const boton6 = document.getElementById('6');
boton6.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '6';
});

const boton7 = document.getElementById('7');
boton7.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '7';
});


const boton8 = document.getElementById('8');
boton8.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '8';
});


const boton9 = document.getElementById('9');
boton9.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '9';
});


const boton0 = document.getElementById('0');
boton0.addEventListener('click', function () {
  display.innerHTML = display.innerHTML + '0';
});


//Operaciones
const botonMas = document.getElementById('mas');
botonMas.addEventListener('click', function () {
  valorUno = parseInt(display.innerHTML);
  display.innerHTML = '';
});

const botonIgual = document.getElementById('igual');
botonIgual.addEventListener('click', function () {
  valorFinal = parseInt(display.innerHTML);
  display.innerHTML = valorUno + valorFinal;
});
