
import type { Cell } from "./game-logic";

// Cell.tsx

type CellProps = {
    cell: Cell;
    onLeftClick: () => void;
    onRightClick: () => void;
};
  
export default function Cell({ cell, onLeftClick, onRightClick }: CellProps) {
    const handleContext = (e: React.MouseEvent) => {
      e.preventDefault();
      onRightClick();
    };
  
    let content = "";
    if (cell.isRevealed) {
      if (cell.isMine) content = "💣";
      else if (cell.neighborMines > 0) content = String(cell.neighborMines);
    } else if (cell.isFlagged) {
      content = "🚩";
    }
  
    return (
      <div
        onClick={onLeftClick}
        onContextMenu={handleContext}
        className={`
            w-8 h-8 border flex items-center justify-center text-sm bg-gray-200 hover:bg-gray-300 cursor-pointer 
            ${cell.isRevealed ? "bg-gray-300" : ""}
            ${cell.isFlagged ? "bg-red-50" : ""}
        `}
      >
        {content}
      </div>
    );
  }
  