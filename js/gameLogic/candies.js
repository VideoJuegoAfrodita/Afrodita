const CANDIES = ["heart", "rose", "shell", "ring", "dove"];

export function removeMatches(board, matches) {
  matches.forEach(([row, col]) => {
    board[row][col] = null;
  });
}

export function dropCandies(board) {
  const size = board.length;

  for (let col = 0; col < size; col++) {
    for (let row = size - 1; row >= 0; row--) {
      if (board[row][col] === null) {
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

export function refillCandies(board) {
  const size = board.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (board[row][col] === null) {
        board[row][col] =
          CANDIES[Math.floor(Math.random() * CANDIES.length)];
      }
    }
  }
}
