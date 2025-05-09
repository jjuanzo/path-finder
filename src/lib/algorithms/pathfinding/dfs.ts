import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { checkStack, isEqual } from "../../../utils/helpers";
import type { GridType, TileType } from "../../../utils/types";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversedTiles = [base];

  while (unTraversedTiles.length > 0) {
    const currentTile = unTraversedTiles.pop()!;

    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance === Infinity) break;
      currentTile.isTraversed = true;
      traversedTiles.push(currentTile);

      if (isEqual(currentTile, endTile)) break;
      const neighbors = getUntraversedNeighbors(grid, currentTile);
      for (let i = 0; i < neighbors.length; i++) {
        if (!checkStack(neighbors[i], unTraversedTiles)) {
          const neighbor = neighbors[i];
          neighbor.distance = currentTile.distance + 1;
          neighbor.parent = currentTile;
          unTraversedTiles.push(neighbor);
        }
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];

  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }

  return { traversedTiles, path };
};
