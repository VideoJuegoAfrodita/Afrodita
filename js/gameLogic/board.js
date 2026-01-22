// board.js
const BOARD_SIZE = 8;

export const CANDIES = ["heart", "rose", "shell", "ring", "dove"];

function getValidCandy(board, row, col) {
  let candy;

  do {
    candy = CANDIES[Math.floor(Math.random() * CANDIES.length)];
  } while (
    (col >= 2 &&
      board[row][col - 1] === candy &&
      board[row][col - 2] === candy) ||
    (row >= 2 &&
      board[row - 1][col] === candy &&
      board[row - 2][col] === candy)
  );

  return candy;
}

export function createBoard() {
  const board = [];

  for (let row = 0; row < BOARD_SIZE; row++) {
    board[row] = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      board[row][col] = getValidCandy(board, row, col);
    }
  }

  return board;
}

export function renderBoard(board, container, onCellClick) {
  container.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((candy, colIndex) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = rowIndex;
      cell.dataset.col = colIndex;

      cell.addEventListener("click", () => {
        onCellClick(rowIndex, colIndex);
      });

      if (candy) {
        const img = document.createElement("img");
        img.src = `assets/images/${candy}.png`;
        img.alt = candy;
        cell.appendChild(img);
      }

      container.appendChild(cell);
    });
  });
}
