export function checkMatches(board) {
  const matches = [];
  const size = board.length;

  // Horizontales
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

      if (line.length >= 3) matches.push(...line);
      col = nextCol;
    }
  }

  // Verticales
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
        line.push([nextRow, col]);
        nextRow++;
      }

      if (line.length >= 3) matches.push(...line);
      row = nextRow;
    }
  }

  return matches;
}
