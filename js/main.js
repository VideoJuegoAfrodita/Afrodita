// main.js - IMPORTACIÓN CORRECTA
import { renderHome } from "./screens/home.js";

function attachStartButton() {
  const startBtn = document.getElementById("start");
  if (startBtn) {
    startBtn.addEventListener("click", async () => {
      const { startNewGame } = await import("./screens/game.js");
      startNewGame();
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  attachStartButton();

  const bestScoreElement = document.getElementById("best-score");
  if (bestScoreElement) {
    const bestScore = localStorage.getItem("bestScore") || 0;
    bestScoreElement.textContent = bestScore;
  }
});

// 🔹 Cuando desde el juego vuelven al inicio
window.addEventListener("go-home", () => {
  renderHome();
  attachStartButton();   // ← MUY IMPORTANTE
});