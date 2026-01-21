/* =====================================================
   candies.js
   Persona 3 – Caída y generación de fichas
   Compatible con board[row][col]
===================================================== */



const CANDIES = ["heart", "rose", "shell", "ring", "dove"];

import { sumarPuntos, descontarMovimiento } from './score.js';
/**
 * Elimina las fichas marcadas (las deja en null)
 */
export function removeMatches(board, matches) {
// inicia el conteo de combinaciones 4
  if (!matches || matches.length === 0) return;

    // 2. Sumamos los puntos una sola vez recorriendo los grupos encontrados
    matches.forEach(line => {
        const puntosGanados = line.length + 20; 
        sumarPuntos(puntosGanados);
    });

  matches.forEach(([row, col]) => {
    board[row][col] = null;
  });
}

/**
 * Hace caer las fichas por gravedad
 */
export function dropCandies(board) {
  const size = board.length;
  // -------4--------//
  descontarMovimiento();

  for (let col = 0; col < size; col++) {
    for (let row = size - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        // buscar arriba una ficha válida
        for (let k = row - 1; k >= 0; k--) {
          if (board[k][col] !== null) {
            board[row][col] = board[k][col];
            board[k][col] = null;
            break;
          }
        }
      }
    }
  }
}

/**
 * Rellena espacios vacíos con nuevas fichas
 */
export function refillCandies(board) {
  const size = board.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (board[row][col] === null) {
        const random =
          CANDIES[Math.floor(Math.random() * CANDIES.length)];
        board[row][col] = random;
      }
    }
  }
}