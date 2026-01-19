let puntaje = 0;
let movimientos = checkMatches(matches);
let juegoTerminado = false;


import {checkMatches} from '../gameLogic/match.js';
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
import {renderWin} from '../screens/end.js';
import {renderLose} from '../screens/end.js';

function finalizarJuego() {
    juegoTerminado = true;

    if (puntaje > 2000) {
        window.location.href = renderWin;
    } else {
        window.location.href = renderLose;
    }
}

sumarPuntos()
descontarMovimiento()
finalizarJuego()