const BOARD_SIZE = 8;

const CANDIES = [
    "heart",
    "rose",
    "shell",
    "ring",
    "dove"
];

export function createBoard() {
    const board = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
        const currentRow =[];
        for (let col = 0; col < BOARD_SIZE; col++) {
            const randomCandy =
                CANDIES[Math.floor(Math.random() * CANDIES.length)];
            currentRow.push(randomCandy);
        }
        board.push(currentRow);
    }
    return board;
}

export function renderBoard(board, container) {
    container.innerHTML = "";

    board.forEach((row, rowIndex) => {
        row.forEach((candy, colIndex) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;

            const img = document.createElement("img");
            img.src = `assets/images/${candy}.png`;
            img.alt = candy;

            cell.appendChild(img);
            container.appendChild(cell);
        });
    });
}