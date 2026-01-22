export function renderEnd(score, isWin) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="end-screen">
      <h2>${isWin ? "🎉 Victoria" : "💔 Derrota"}</h2>
      <p>Puntaje final: <strong>${score}</strong></p>
      <button  id="play-again">Reintentar</button>
      <button  id="go-home">Inicio</button>
    </section>
  `;

  document.getElementById("play-again").onclick = () => {
    window.dispatchEvent(new Event("restart-game"));
  };

  document.getElementById("go-home").onclick = () => {
    window.dispatchEvent(new Event("go-home"));
  };
}
