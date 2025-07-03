// Board.tsx
import Cell from "./Cell";
import { Cell as CellType } from "./game-logic";

type BoardProps = {
  board: CellType[][];
  onCellClick: (x: number, y: number) => void;
  onFlag: (x: number, y: number) => void;
};

export default function Board({ board, onCellClick, onFlag }: BoardProps) {
  return (
    <div className="inline-block">
      {board.map((row, x) => (
        <div key={x} className="flex">
          {row.map((cell, y) => (
            <Cell
              key={y}
              cell={cell}
              onLeftClick={() => onCellClick(x, y)}
              onRightClick={() => onFlag(x, y)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
