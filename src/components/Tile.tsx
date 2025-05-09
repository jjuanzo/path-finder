import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
}) {
  let tileStyle;

  if (isStart) {
    tileStyle = START_TILE_STYLE;
  } else if (isEnd) {
    tileStyle = END_TILE_STYLE;
  } else if (isWall) {
    tileStyle = WALL_TILE_STYLE;
  } else if (isPath) {
    tileStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE;
  } else {
    tileStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
    />
  );
}
