// game.js - RUTAS CORREGIDAS
import { createBoard, renderBoard } from "../gameLogic/board.js";
import { checkMatches } from "../gameLogic/match.js";
import { removeMatches, dropCandies, refillCandies } from "../gameLogic/candies.js";
import { iniciarReloj, resetTimer, stopTimer } from "../gameLogic/timer.js";
import { addScore, finishGame, resetScore } from "../gameLogic/score.js";

// ... resto del código SIN CAMBIOS ...

let board = [];
let selected = null;
let moves = 20;
let resolving = false;
let ended = false;

  

function startGame() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="game-screen">
      <header class="game-header">
        <span>Puntaje: <strong class="score">0</strong></span>
        <span>Movimientos: <strong class="moves">20</strong></span>
        <span>Tiempo: <strong class="time">120</strong></span>
      </header>
      <div id="board" class="board"></div>
    </section>
  `;
  

  board = createBoard();
  iniciarReloj();
  render();
}

function render() {
  renderBoard(board, document.getElementById("board"), handleClick);
}

function handleClick(row, col) {
  if (ended || resolving) return;

  if (!selected) {
    selected = { row, col };
    return;
  }

  const { row: r1, col: c1 } = selected;
  selected = null;

  if (Math.abs(r1 - row) + Math.abs(c1 - col) !== 1) return;

  swap(r1, c1, row, col);

  const matches = checkMatches(board);
  if (matches.length === 0) {
    swap(r1, c1, row, col);
    return;
  }

  moves--;
  document.querySelector(".moves").textContent = moves;

  resolving = true;
  resolve();
}

function resolve() {
  const matches = checkMatches(board);

  if (matches.length === 0) {
    resolving = false;
    if (moves <= 0) endGame();
    return;
  }

  addScore(matches.length * 20);
  removeMatches(board, matches);
  dropCandies(board);
  refillCandies(board);
  render();

  setTimeout(resolve, 300);
}

function endGame() {
  ended = true;
  stopTimer();
  finishGame(document.querySelector(".score").textContent >= 1000);
}

function swap(r1, c1, r2, c2) {
  [board[r1][c1], board[r2][c2]] = [board[r2][c2], board[r1][c1]];
}

export function startNewGame() {
  moves = 20;
  ended = false;
  resolving = false;
  resetScore();
  resetTimer();
  startGame();  
}

window.addEventListener("restart-game", startNewGame);


