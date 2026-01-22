// screens/game.js
import { createBoard, renderBoard } from "../gameLogic/board.js";
import { checkMatches } from "../gameLogic/match.js";
import { removeMatches, dropCandies, refillCandies } from "../gameLogic/candies.js";
import { iniciarReloj, resetTimer, stopTimer } from "../gameLogic/timer.js";
import { addScore, finishGame, resetScore } from "../gameLogic/score.js";

let board = [];
let selected = null;
let moves = 20;
let resolving = false;
let ended = false;

// -------------------------
// INICIAR JUEGO
// -------------------------
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

// -------------------------
// MANEJO DE CLICS
// -------------------------
function handleClick(row, col) {
  if (ended || resolving) return;

  if (!selected) {
    selected = { row, col };
    highlightSelected(row, col);
    return;
  }

  const { row: r1, col: c1 } = selected;
  clearSelection();
  selected = null;

  // Solo permitir vecinos
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

function highlightSelected(row, col) {
  const cell = document.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );
  if (cell) cell.classList.add("selected");
}

function clearSelection() {
  document.querySelectorAll(".cell.selected").forEach(c => {
    c.classList.remove("selected");
  });
}

// -------------------------
// RESOLVER MATCHES CON ANIMACIÓN
// -------------------------
function resolve() {
  const matches = checkMatches(board);

  if (matches.length === 0) {
    resolving = false;
    if (moves <= 0) endGame();
    return;
  }

  animateMatches(matches);

  setTimeout(() => {
    addScore(matches.length * 20);
    removeMatches(board, matches);
    dropCandies(board);
    refillCandies(board);
    render();

    setTimeout(resolve, 300);
  }, 500);
}

// -------------------------
// ANIMACIONES DE MATCH x3, x4, x5
// -------------------------
function animateMatches(matches) {
  matches.forEach(([row, col]) => {
    const cell = document.querySelector(
      `.cell[data-row="${row}"][data-col="${col}"]`
    );

    if (!cell) return;

    let size = matches.length;

    if (size >= 5) {
      cell.classList.add("match-5");
    } else if (size === 4) {
      cell.classList.add("match-4");
    } else {
      cell.classList.add("match-3");
    }

    setTimeout(() => {
      cell.classList.add("fade-out");
    }, 300);
  });
}

// -------------------------
// FIN DEL JUEGO
// -------------------------
function endGame() {
  ended = true;
  stopTimer();
  finishGame(document.querySelector(".score").textContent >= 1000);
}

// -------------------------
// UTILIDADES
// -------------------------
function swap(r1, c1, r2, c2) {
  [board[r1][c1], board[r2][c2]] = [board[r2][c2], board[r1][c1]];
}

// -------------------------
// API PÚBLICA
// -------------------------
export function startNewGame() {
  moves = 20;
  ended = false;
  resolving = false;
  selected = null;

  resetScore();
  resetTimer();
  startGame();
}

// Evento reiniciar desde pantalla final
window.addEventListener("restart-game", startNewGame);
