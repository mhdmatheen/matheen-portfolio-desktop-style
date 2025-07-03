type GridProps = {
    snake: { x: number; y: number }[];
    food: { x: number; y: number };
  };
  
  const BOARD_SIZE = 20;
  
  export default function Grid({ snake, food }: GridProps) {
    const rows = Array.from({ length: BOARD_SIZE }, (_, y) =>
      Array.from({ length: BOARD_SIZE }, (_, x) => {
        const isSnake = snake.some(p => p.x === x && p.y === y);
        const isHead = snake[0].x === x && snake[0].y === y;
        const isFood = food.x === x && food.y === y;
        return (
          <div
            key={`${x}-${y}`}
            className={`w-5 h-5 border border-gray-200
              ${isHead ? "bg-green-700" :
                isSnake ? "bg-green-500" :
                isFood ? "bg-red-500" : "bg-white"}`}
          />
        );
      })
    );
  
    return (
      <div className="grid" style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`
      }}>
        {rows.flat()}
      </div>
    );
  }
  