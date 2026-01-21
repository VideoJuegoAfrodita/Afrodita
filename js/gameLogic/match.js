/* =====================================================
   match.js
   Persona 3 – Detección de combinaciones (CORREGIDO)
===================================================== */

export function checkMatches(board) {
  const matches = [];
  const size = board.length;

  // -------- HORIZONTALES --------
  for (let row = 0; row < size; row++) {
    let col = 0;

    while (col < size - 2) {
      const color = board[row][col];
      if (!color) {
        col++;
        continue;
      }

      let line = [[row, col]];
      let nextCol = col + 1;

      while (nextCol < size && board[row][nextCol] === color) {
        line.push([row, nextCol]);
        nextCol++;
      }

      if (line.length >= 3) {
        matches.push(...line);
      }

      col = nextCol; // saltamos directo al final de la secuencia
    }
  }

  // -------- VERTICALES --------
  for (let col = 0; col < size; col++) {
    let row = 0;

    while (row < size - 2) {
      const color = board[row][col];
      if (!color) {
        row++;
        continue;
      }

      let line = [[row, col]];
      let nextRow = row + 1;

      while (nextRow < size && board[nextRow][col] === color) {
        line.push([nextRow, col]); // 🔥 AQUÍ ESTABA TU ERROR
        nextRow++;
      }

      if (line.length >= 3) {
        matches.push(...line);
      }

      row = nextRow; // saltamos al final de la secuencia
    }
  }

  return matches; // posiciones únicas correctas
}
