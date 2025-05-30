import type {
  AlgorithmSelectType,
  MazeSelectType,
  SpeedSelectType,
} from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const TILE_STYLE =
  "lg:w-[17px] lg:h-[17px] md:w-[15px] md:h-[15px] xs:w-[8px] xs:h-[8px] w-[7px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-400";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-400";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-400";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-400";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-500";

export const MAZES: MazeSelectType[] = [
  { label: "No Maze", value: "NONE" },
  { label: "Binary Tree", value: "BINARY_TREE" },
  { label: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { label: "Dijkstra", value: "DIJSKTRA" },
  { label: "A-Start", value: "A_STAR" },
  { label: "Breath First Search", value: "BFS" },
  { label: "Depth First Search", value: "DFS" },
];

export const SPEEDS: SpeedSelectType[] = [
  { label: "Slow", value: 2 },
  { label: "Medium", value: 1 },
  { label: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTEND_SLEEP_TIME = 30;
