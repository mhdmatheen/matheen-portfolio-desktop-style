"use client";
import { useEffect, useState } from "react";
import Board from "./Board";
import { generateBoard, resetGame, revealCell } from "./game-logic";

export default function MinesweeperWindow({ onClose }: { onClose: () => void }) {
  const [board, setBoard] = useState(() => generateBoard(9, 9, 10));
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (x: number, y: number) => {
    const cell = board[x][y];
    if (cell.isMine) {
      setGameOver(true);
      resetGame(board);
      setBoard(generateBoard(9, 9, 10));
      return;
    }
    const updated = revealCell(board, x, y);
    setBoard(updated);
  };

  const handleFlag = (x: number, y: number) => {
    const clone = board.map(row => row.map(cell => ({ ...cell })));
    clone[x][y].isFlagged = !clone[x][y].isFlagged;
    setBoard(clone);
  };

  return (
    <div className="window-frame min-w-[300px] min-h-[300px] p-2 bg-white flex items-center justify-center relative">
      <div className="w-full flex-1 ">
          <Board board={board} onCellClick={handleClick} onFlag={handleFlag} />
            <div className={`absolute top-0 bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm w-full flex items-center justify-center flex-1 ${gameOver ? 'scale-100' : 'scale-0 pointer-events-none'} transition-all duration-300`}>
                <div className="bg-white rounded p-6 flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="text-red-600 text-xl font-bold">Game Over!</div>
                        <div>💥 Boom! You hit a mine!</div>
                    </div>
                    <button className="win7-btn px-4 py-2 rounded" onClick={() => {setGameOver(false); setBoard(generateBoard(9, 9, 10));}}>New Game</button>
                </div>
            </div>
      </div>
    </div>
  );
}
