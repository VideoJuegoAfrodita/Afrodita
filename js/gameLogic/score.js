import { renderEnd } from "../screens/end.js";

let score = 0;
let gameEnded = false;

export function resetScore() {
  score = 0;
  gameEnded = false;
}

export function addScore(points) {
  if (gameEnded) return;
  score += points;
  document.querySelector(".score").textContent = score;
}

export function finishGame(isWin) {
  gameEnded = true;

  const best = localStorage.getItem("bestScore") || 0;
  if (score > best) {
    localStorage.setItem("bestScore", score);
  }

  renderEnd(score, isWin);
}
