let puntaje = 0;
let movimientos = checkMatches(matches);
let juegoTerminado = false;


import {checkMatches} from '../gameLogic/match.js'
const txtPuntaje = document.getElementById("puntaje");
const txtMovimientos = document.getElementById("movimiento");

// 4. Función para sumar puntos (se llamaría cuando el usuario hace un match)
function sumarPuntos(cantidad) {
    if (juegoTerminado) return; 

    puntaje += cantidad; 
    txtPuntaje.textContent = puntaje; 
}

// 5. Función para restar movimientos (se llama cada vez que el usuario mueve algo)
function descontarMovimiento() {
    if (juegoTerminado) return;

    movimientos--; 
    txtMovimientos.textContent = movimientos;

    
    if (movimientos <= 0) {
        finalizarJuego();
    }
}

// 6. Lógica de Victoria o Derrota
function finalizarJuego() {
    juegoTerminado = true;

    if (puntaje > 2000) {
        window.location.href = "victoria.html";
    } else {
        window.location.href = "derrota.html";
    }
}

sumarPuntos()
descontarMovimiento()
finalizarJuego()