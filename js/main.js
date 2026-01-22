// main.js - IMPORTACIÓN CORRECTA
import { renderHome } from "./screens/home.js";

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start");
    if (startBtn) {
        startBtn.addEventListener("click", async () => {
            // ¡game.js está en screens/!
            const { startNewGame } = await import("./screens/game.js");
            startNewGame();
        });
    }
    
    // Actualiza el mejor puntaje
    const bestScoreElement = document.getElementById("best-score");
    if (bestScoreElement) {
        const bestScore = localStorage.getItem("bestScore") || 0;
        bestScoreElement.textContent = bestScore;
    }
});

window.addEventListener("go-home", () => {
    renderHome();
});