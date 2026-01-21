let puntaje = 0;
let movimientos = 20;
let juegoTerminado = false;

import { renderWin, renderLose } from '../screens/end.js';

// 4. Función para sumar puntos (se llamaría cuando el usuario hace un match)
export function sumarPuntos(cantidad) {
    const txtPuntaje = document.querySelector('.score');

    if (juegoTerminado) return; 

    if (txtPuntaje) {
        puntaje += cantidad; 
        txtPuntaje.textContent = puntaje; 
    }
}

// 5. Función para restar movimientos (se llama cada vez que el usuario mueve algo)
export function descontarMovimiento() {
    if (juegoTerminado) return;

    const txtMovimientos = document.querySelector('.moves');

    if (txtMovimientos) {
        movimientos--; 
        txtMovimientos.textContent = movimientos;
    
    
        if (movimientos <= 0) {
            finalizarJuego();
        }
    }
}

// 6. Lógica de Victoria o Derrota


export function finalizarJuego() {
    juegoTerminado = true;

    if (puntaje > 2000) {
        renderWin(puntaje);
    } else {
        renderLose(puntaje);
    }
}
