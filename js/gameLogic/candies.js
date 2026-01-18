/* =====================================================
   candies.js
   Persona 3 – Manejo de fichas
===================================================== */

/**
 * Hace caer las fichas cuando hay espacios vacíos.
 * Recorre el tablero de abajo hacia arriba simulando gravedad.
 *
 * @param {Array} squares - arreglo de elementos del tablero
 * @param {number} width - ancho del tablero (8)
 */
export function dropCandies(squares, width) {
  for (let i = squares.length - 1; i >= 0; i--) {
    if (squares[i].dataset.color === "") {
      const above = i - width;

      if (above >= 0) {
        squares[i].dataset.color = squares[above].dataset.color;
        squares[i].className = "candy " + squares[i].dataset.color;

        squares[above].dataset.color = "";
        squares[above].className = "candy empty";
      }
    }
  }
}

/**
 * Genera nuevas fichas en los espacios vacíos.
 * Se ejecuta después de la caída.
 *
 * @param {Array} squares - “Esta función espera recibir un arreglo llamado squares”
 * @param {Array} colors - colores disponibles
 */
export function refillCandies(squares, colors) {
  squares.forEach(square => {
    if (square.dataset.color === "") {
      const color = colors[Math.floor(Math.random() * colors.length)];
      square.dataset.color = color;
      square.className = "candy " + color;
    }
  });
}

/* 
ESTO SOLO SERA DE REFERENCIA PARA CONECTARLO EN EL MAIN QUE ES LA PERSONA DOS */

/* 

import { checkMatches, removeMatches } from "./logic/match.js";
import { dropCandies, refillCandies } from "./logic/candies.js";

const matches = checkMatches(squares, width);

if (matches.length > 0) {
  matches.forEach(match => {
    // aquí decides animaciones, score, bombas, etc
    removeMatches(squares, match);
  });

  dropCandies(squares, width);
  refillCandies(squares, colors);
}

*/