let tiempoRestante = 120;
let juegoTerminado = false;

import {finalizarJuego} from '../gameLogic/score.js';

// 3. Función para iniciar el cronómetro
export function iniciarReloj() {

    const txtTiempo = document.querySelector('.time');
    // setInterval ejecuta el código cada 1000 milisegundos (1 segundo)
    const intervalo = setInterval(() => {
        // Si el juego ya terminó por movimientos, detenemos el reloj
        if (juegoTerminado) {
            clearInterval(intervalo);
            return;
        }

        tiempoRestante--;
        if (txtTiempo) {
            txtTiempo.textContent = tiempoRestante;
        }
        

        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            finalizarJuego();
        }

        
    }, 1000);
}