let tiempoRestante = 120;
let juegoTerminado = false;

const txtTiempo = document.getElementById("tiempo");

// 3. Función para iniciar el cronómetro
function iniciarReloj() {
    // setInterval ejecuta el código cada 1000 milisegundos (1 segundo)
    const intervalo = setInterval(() => {
        // Si el juego ya terminó por movimientos, detenemos el reloj
        if (juegoTerminado) {
            clearInterval(intervalo);
            return;
        }

        tiempoRestante--;
        txtTiempo.textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            finalizarJuego();
        }
    }, 1000);
}

iniciarReloj();