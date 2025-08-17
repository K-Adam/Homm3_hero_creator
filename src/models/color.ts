import { TownType } from "./town";

interface TownColor {
  color: string;
  background?: string;
}

export const townColors: Record<TownType, TownColor> = {
  [TownType.Castle]: { color: "#2744eb", background: "#062450" },
  [TownType.Conflux]: { color: "#e9778a", background: "#aa5966" },
  [TownType.Cove]: { color: "#0d8f8f", background: "#006666" },
  [TownType.Dungeon]: { color: "#c000c0", background: "#660566" },
  [TownType.Factory]: { color: "#f77802", background: "#8b3300" },
  [TownType.Fortress]: { color: "#007500", background: "#003b00" },
  [TownType.Inferno]: { color: "#ff0000", background: "#5f0000" },
  [TownType.Necropolis]: { color: "#808080", background: "#808080" },
  [TownType.Rampart]: { color: "#00d600", background: "#006e00" },
  [TownType.Stronghold]: { color: "#e2be92", background: "#926242" },
  [TownType.Tower]: { color: "#fafafa", background: "#e0e0e0" },
};
