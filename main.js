let valorUno = 0;
let valorFinal = 0;
let banderaPunto = false;
let operador = "";

const display = document.getElementById("display");

//Botones calculadora
const boton1 = document.getElementById("1");
boton1.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "1";
});

const boton2 = document.getElementById("2");
boton2.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "2";
});
const boton3 = document.getElementById("3");
boton3.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "3";
});
const boton4 = document.getElementById("4");
boton4.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "4";
});
const boton5 = document.getElementById("5");
boton5.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "5";
});

const boton6 = document.getElementById("6");
boton6.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "6";
});

const boton7 = document.getElementById("7");
boton7.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "7";
});

const boton8 = document.getElementById("8");
boton8.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "8";
});

const boton9 = document.getElementById("9");
boton9.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "9";
});

const boton0 = document.getElementById("0");
boton0.addEventListener("click", function() {
    display.innerHTML = display.innerHTML + "0";
});

const botonDecimal = document.getElementById("decimal");
botonDecimal.addEventListener("click", function() {
    if (banderaPunto == false) {
        display.innerHTML = display.innerHTML + ".";
        banderaPunto = true;
    }
});

//Operaciones
const botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", function() {
    valorUno = parseFloat(display.innerHTML);
    operador = "+";
    limpiarPantalla();
});
const botonResta = document.getElementById("restar");
botonResta.addEventListener("click", function() {
    valorUno = parseFloat(display.innerHTML);
    operador = "-";
    limpiarPantalla();
});

const botonMultiplicar = document.getElementById("multiplicar");
botonMultiplicar.addEventListener("click", function() {
    valorUno = parseFloat(display.innerHTML);
    operador = "*";
    limpiarPantalla();
});

const botonDividir = document.getElementById("dividir");
botonDividir.addEventListener("click", function() {
    valorUno = parseFloat(display.innerHTML);
    operador = "/";
    limpiarPantalla();
});

const botonIgual = document.getElementById("igual");
botonIgual.addEventListener("click", function() {
    valorFinal = parseFloat(display.innerHTML);
    calcular(operador, valorUno, valorFinal);
});

const botonDelete = document.getElementById("del");
botonDelete.addEventListener("click", function() {
    clear();
});

function calcular(operador, v_inicial, v_final) {
    var resultado = 0;
    switch (operador) {
        case "+":
            resultado = parseFloat(v_inicial) + parseFloat(v_final);
            break;
        case "-":
            resultado = parseFloat(v_inicial) - parseFloat(v_final);
            break;
        case "*":
            resultado = parseFloat(v_inicial) * parseFloat(v_final);
            break;
        case "/":
            resultado = parseFloat(v_inicial) / parseFloat(v_final);
            break;
    }
    if (resultado.toFixed(2) != "NaN") {
        display.innerHTML = resultado.toFixed(2);
        banderaPunto = false;
    } else {
        display.innerHTML = "ERROR";
    }
}

function clear() {
    valorFinal = 0;
    valorUno = 0;
    operador = "";
    limpiarPantalla();
}

function limpiarPantalla() {
    display.innerHTML = "";
    banderaPunto = false;
}
clear();