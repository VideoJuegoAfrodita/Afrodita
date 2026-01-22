// screens/end.js
export function renderEnd(score, isWin) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="end-screen ${isWin ? "win" : "lose"}">
      
      <div class="heart-container">
        ${
          isWin
            ? `
              <div class="heart beating"></div>
              <div class="mini-hearts">
                <span>💗</span><span>💖</span><span>💕</span>
              </div>
            `
            : `
              <div class="broken-heart">
                <div class="half left"></div>
                <div class="half right"></div>
              </div>
            `
        }
      </div>

      <h2>${isWin ? "🎉 Victoria" : "💔 Derrota"}</h2>
      <p>Puntaje final: <strong>${score}</strong></p>

      <div class="end-buttons">
        <button id="play-again">Reintentar</button>
        <button id="go-home">Inicio</button>
      </div>
    </section>
  `;

  document.getElementById("play-again").onclick = () => {
    window.dispatchEvent(new Event("restart-game"));
  };

  document.getElementById("go-home").onclick = () => {
    window.dispatchEvent(new Event("go-home"));
  };
}