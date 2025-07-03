// game-logic.ts
export type Cell = {
    x: number;
    y: number;
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neighborMines: number;
};

export function generateBoard(rows: number, cols: number, mineCount: number): Cell[][] {
    // init board
    const board: Cell[][] = Array.from({ length: rows }, (_, x) =>
        Array.from({ length: cols }, (_, y) => ({
            x,
            y,
            isMine: false,
            isRevealed: false,
            isFlagged: false,
            neighborMines: 0,
        }))
    );

    // place mines
    let placed = 0;
    while (placed < mineCount) {
        const x = Math.floor(Math.random() * rows);
        const y = Math.floor(Math.random() * cols);
        if (!board[x][y].isMine) {
            board[x][y].isMine = true;
            placed++;
        }
    }

    // calculate neighbor mines
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (board[x][y].isMine) continue;
            let count = 0;
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    const nx = x + dx, ny = y + dy;
                    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && board[nx][ny].isMine)
                        count++;
                }
            }
            board[x][y].neighborMines = count;
        }
    }

    return board;
}

// game-logic.ts
export function revealCell(board: Cell[][], x: number, y: number): Cell[][] {
    const clone = board.map(row => row.map(cell => ({ ...cell })));
    const queue: [number, number][] = [[x, y]];

    while (queue.length) {
        const [cx, cy] = queue.pop()!;
        const cell = clone[cx][cy];

        if (cell.isRevealed || cell.isFlagged) continue;

        cell.isRevealed = true;

        if (cell.neighborMines === 0 && !cell.isMine) {
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    const nx = cx + dx, ny = cy + dy;
                    if (nx >= 0 && nx < clone.length && ny >= 0 && ny < clone[0].length)
                        queue.push([nx, ny]);
                }
            }
        }
    }

    return clone;
}


// Reset the game
export function resetGame(board: Cell[][]) {
    return board.map(row => row.map(cell => ({ ...cell, isRevealed: false, isFlagged: false })));
}

