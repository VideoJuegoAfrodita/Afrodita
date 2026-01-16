import { createBoard, renderBoard } from "../gameLogic/board.js";

export function renderGame() {
    const app = document.getElementById("app");

    app.innerHTML = `
    <section class="game-screen">
        <header class="game-header">
            <h2>Afrodita Crush 💖</h2>
            <div class="game-info">
                <span>Puntaje: <strong>0</strong></span>
                <span>Movimientos: <strong>20</strong></span>
            </div>
        </header>
        
        <div id="board" class="board"></div>
    </section>
    `;

    const boardContainer = document.getElementById("board");
    const board = createBoard();
    renderBoard(board, boardContainer);
}