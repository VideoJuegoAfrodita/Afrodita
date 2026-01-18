/* =====================================================
   match.js
   Persona 3 – Detección de combinaciones
===================================================== */

/**
 * Detecta combinaciones horizontales y verticales
 * de 3 o más fichas iguales.
 *
 * NO elimina inmediatamente.
 * Solo devuelve los índices combinados.
 * El param es un punto de referencia para el lector e indicar que se espera en esa variable o que hace NO SE EJECUTA 
 * @param {Array} squares - tablero
 * @param {number} width - ancho del tablero
 * @returns {Array} matches - array de arrays con índices combinados 
 */
export function checkMatches(squares, width) {
  const matches = [];

  // -------- HORIZONTALES --------
  for (let i = 0; i < squares.length; i++) {
    if (i % width > width - 3) continue;

    const color = squares[i].dataset.color;
    if (!color) continue;

    let line = [i];

    for (let j = i + 1; j < i + 5 && j % width !== 0; j++) {
      if (squares[j].dataset.color === color) {
        line.push(j);
      } else break;
    }

    if (line.length >= 3) {
      matches.push(line);
    }
  }

  // -------- VERTICALES --------
  for (let i = 0; i < squares.length - width * 2; i++) {
    const color = squares[i].dataset.color;
    if (!color) continue;

    let line = [i];

    for (let j = i + width; j < squares.length; j += width) {
      if (squares[j].dataset.color === color) {
        line.push(j);
      } else break;
    }

    if (line.length >= 3) {
      matches.push(line);
    }
  }

  return matches;
}

/**
 * Elimina lógicamente las fichas combinadas.
 * (no elimina el div, solo libera el espacio)
 *
 * @param {Array} squares - tablero
 * @param {Array} indices - índices a eliminar
 */
export function removeMatches(squares, indices) {
  indices.forEach(i => {
    squares[i].dataset.color = "";
    squares[i].className = "candy empty";
  });
}