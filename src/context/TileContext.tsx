import type { ReactNode } from "react";
import { createContext, useState } from "react";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";
import type { TileType } from "../utils/types";

interface TileContextInterface {
  startTile: TileType;
  setStartTile: (startTile: TileType) => void;
  endTile: TileType;
  setEndTile: (endTile: TileType) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
);

export const TileProvider = ({ children }: { children: ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(
    START_TILE_CONFIGURATION
  );
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
