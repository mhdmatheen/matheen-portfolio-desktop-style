"use client";
import { useEffect, useState, useRef } from "react";
import Grid from "./grid";

const BOARD_SIZE = 20;

type Pos = { x: number; y: number };
const getRandomPos = (): Pos => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

export default function SnakeWindow() {
  const [snake, setSnake] = useState<Pos[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Pos>(getRandomPos);
  const [dir, setDir] = useState<Pos>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const move = () => {
    setSnake(prev => {
      const head = prev[0];
      const newHead = { x: head.x + dir.x, y: head.y + dir.y };

      // Check wall or self collision
      if (
        newHead.x < 0 || newHead.y < 0 ||
        newHead.x >= BOARD_SIZE || newHead.y >= BOARD_SIZE ||
        prev.some(p => p.x === newHead.x && p.y === newHead.y)
      ) {
        setGameOver(true);
        return prev;
      }

      const ateFood = newHead.x === food.x && newHead.y === food.y;
      const newSnake = [newHead, ...prev];
      if (!ateFood) newSnake.pop();
      else {
        setFood(getRandomPos());
        setScore(s => s + 1);
      }

      return newSnake;
    });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": setDir(d => d.y !== 1 ? { x: 0, y: -1 } : d); break;
        case "ArrowDown": setDir(d => d.y !== -1 ? { x: 0, y: 1 } : d); break;
        case "ArrowLeft": setDir(d => d.x !== 1 ? { x: -1, y: 0 } : d); break;
        case "ArrowRight": setDir(d => d.x !== -1 ? { x: 1, y: 0 } : d); break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Game loop
  useEffect(() => {
    if (dir.x === 0 && dir.y === 0) return;
    intervalRef.current = setInterval(move, 150);
    return () => clearInterval(intervalRef.current!);
  }, [dir]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDir({ x: 0, y: 0 });
    setFood(getRandomPos());
    setGameOver(false);
    setScore(0);
    
  };

  return (
    <div className="window-frame min-w-[300px] min-h-[300px] p-2 bg-white flex items-center justify-center relative">
      <div className="window-content mt-2 flex flex-col items-center">
        <Grid snake={snake} food={food} />
        <p className="mt-2">Score: {score}</p>
        {gameOver && (
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm w-full flex items-center justify-center flex-1 transition-all duration-300">
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-red-600 font-bold text-xl">💀 Game Over</p>
                <button onClick={resetGame} className="win7-btn">
                    Restart
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
