export function renderWin(score) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="end-screen win">
      <h1>💖 ¡Victoria! 💖</h1>
      <p>Afrodita bendice tu amor</p>
      <p class="score">Puntaje final: ${score}</p>

      <div class="end-buttons">
        <button id="restart">Reintentar</button>
        <button id="home">Inicio</button>
      </div>
    </section>
  `;

  document.getElementById("restart").onclick = () => {
    window.dispatchEvent(new Event("restart-game"));
  };

  document.getElementById("home").onclick = () => {
    window.dispatchEvent(new Event("go-home"));
  };
}

export function renderLose(score) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="end-screen lose">
      <h1>💔 Derrota 💔</h1>
      <p>El amor necesita más intentos</p>
      <p class="score">Puntaje final: ${score}</p>

      <div class="end-buttons">
        <button id="restart">Intentar otra vez</button>
        <button id="home">Inicio</button>
      </div>
    </section>
  `;

  document.getElementById("restart").onclick = () => {
    window.dispatchEvent(new Event("restart-game"));
  };

  document.getElementById("home").onclick = () => {
    window.dispatchEvent(new Event("go-home"));
  };
}
