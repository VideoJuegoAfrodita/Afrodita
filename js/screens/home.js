// screens/home.js - VERSIÓN CORRECTA
export function renderHome() {
  const app = document.getElementById("app");
  const bestScore = localStorage.getItem("bestScore") || 0;

  app.innerHTML = `
    <picture class="img">
      <img src="./img/Home/image copy 2.png" class="imgAfrodita">
    </picture>

    <article class="git">
      <h1 class="title">Welcome to Afrodita game</h1>
      <div class="start-game">
        <button id="start">Start game</button>
        <p>Best score</p>
        <p id="best-score">${bestScore}</p>
      </div>
    </article>
  `;
  
  // NO configures el evento aquí - ya lo hace main.js
}