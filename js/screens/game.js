import { createBoard, renderBoard } from "../gameLogic/board.js";
const btnStart = document.getElementById("start");
export function renderGame() {
   btnStart.addEventListener("click", startGame) ; 
}

function startGame() { 
    const app = document.getElementById("app");

    app.innerHTML = `
    <section class="game-screen">
        <header class="game-header">
            <h2>Afrodita Crush 💖</h2>
            <div class="game-info">
                <span>Puntaje: <strong class= "score">0</strong></span>
                <span>Movimientos: <strong class="moves">20</strong></span>
                <span>Tiempo: <strong class="time">120</strong></span>
            </div>
        </header>
        
        <div id="board" class="board"></div>
    </section>
    `;

    const boardContainer = document.getElementById("board");
    const board = createBoard();
    renderBoard(board, boardContainer);
}