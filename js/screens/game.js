// game.js (Persona 2)

import { createBoard, renderBoard } from "../gameLogic/board.js";
import { checkMatches } from "../gameLogic/match.js";
import { removeMatches, dropCandies, refillCandies } from "../gameLogic/candies.js";
import {iniciarReloj} from '../gameLogic/timer.js';


const btnStart = document.getElementById("start");

let board = [];
let selected = null;

export function renderGame() {
  btnStart.addEventListener("click", startGame);
}

function startGame() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="game-screen">
      <header class="game-header">
        <h2>Afrodita Crush 💖</h2>
        <div class="game-info">
          <span>Puntaje: <strong class="score">0</strong></span>
          <span>Movimientos: <strong class="moves">20</strong></span>
          <span>Tiempo: <strong class="time">120</strong></span>
        </div>
      </header>

      <div id="board" class="board"></div>
    </section>
  `;

  board = createBoard();
  iniciarReloj();

  const boardContainer = document.getElementById("board");

  renderBoard(board, boardContainer, handleCellClick);

  // 🔁 loop automático de cascadas
  setInterval(gameLoop, 400);
}

/* =============================
   MANEJO DE CLICS (SWAP)
============================= */

function handleCellClick(row, col) {
  if (!selected) {
    selected = { row, col };
    highlight(row, col);
    return;
  }

  const { row: r1, col: c1 } = selected;
  const r2 = row;
  const c2 = col;

  clearHighlight();

  // 🔥 solo permitir adyacentes
  if (!isAdjacent(r1, c1, r2, c2)) {
    selected = null;
    return;
  }

  // 🔥 swap temporal
  swap(board, r1, c1, r2, c2);

  // 🔥 validar con Persona 3
  const matches = checkMatches(board);

  if (matches.length === 0) {
    // movimiento inválido → revertir
    swap(board, r1, c1, r2, c2);
  }

  selected = null;

  const boardContainer = document.getElementById("board");
  renderBoard(board, boardContainer, handleCellClick);
}

/* =============================
   LOOP PRINCIPAL (Persona 3)
============================= */

function gameLoop() {
  const matches = checkMatches(board);

  if (matches.length > 0) {
    removeMatches(board, matches);
    dropCandies(board);
    refillCandies(board);

    const boardContainer = document.getElementById("board");
    renderBoard(board, boardContainer, handleCellClick);
  }
}

/* =============================
   FUNCIONES AUXILIARES (Persona 2)
============================= */

function swap(board, r1, c1, r2, c2) {
  const temp = board[r1][c1];
  board[r1][c1] = board[r2][c2];
  board[r2][c2] = temp;
}

function isAdjacent(r1, c1, r2, c2) {
  const dr = Math.abs(r1 - r2);
  const dc = Math.abs(c1 - c2);
  return dr + dc === 1;
}

function highlight(row, col) {
  const cell = document.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );
  if (cell) cell.classList.add("selected");
}

function clearHighlight() {
  document.querySelectorAll(".cell.selected").forEach(cell => {
    cell.classList.remove("selected");
  });
}
