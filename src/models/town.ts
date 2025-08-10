export enum TownType {
  Castle = "castle",
  Conflux = "conflux",
  Cove = "cove",
  Dungeon = "dungeon",
  Factory = "factory",
  Fortress = "fortress",
  Inferno = "inferno",
  Necropolis = "necropolis",
  Rampart = "rampart",
  Stronghold = "stronghold",
  Tower = "tower",
}

export enum HeroType {
  Might = "might",
  Magic = "magic",
}

export interface Statistics {
  attack: number;
  defense: number;
  spellPower: number;
  knowledge: number;
  name: string;
}

// prettier-ignore
export const classStats: Record<TownType, Record<HeroType, Statistics>> = {
  [TownType.Castle]: {
    [HeroType.Might]: { attack: 2, defense: 2, spellPower: 1, knowledge: 1, name: "Knight" },
    [HeroType.Magic]: { attack: 1, defense: 0, spellPower: 2, knowledge: 2, name: "Cleric" },
  },
  [TownType.Conflux]: {
    [HeroType.Magic]: { attack: 0, defense: 0, spellPower: 2, knowledge: 3, name: "Elementalist" },
    [HeroType.Might]: { attack: 3, defense: 1, spellPower: 1, knowledge: 1, name: "Planeswalker" },
  },
  [TownType.Cove]: {
    [HeroType.Might]: { attack: 3, defense: 0, spellPower: 2, knowledge: 1, name: "Captain" },
    [HeroType.Magic]: { attack: 2, defense: 0, spellPower: 1, knowledge: 2, name: "Navigator" },
  },
  [TownType.Dungeon]: {
    [HeroType.Might]: { attack: 2, defense: 2, spellPower: 1, knowledge: 1, name: "Overlord" },
    [HeroType.Magic]: { attack: 0, defense: 0, spellPower: 3, knowledge: 2, name: "Warlock" },
  },
  [TownType.Factory]: {
    [HeroType.Might]: { attack: 3, defense: 1, spellPower: 1, knowledge: 1, name: "Mercenary" },
    [HeroType.Magic]: { attack: 0, defense: 1, spellPower: 2, knowledge: 2, name: "Artificer" },
  },
  [TownType.Fortress]: {
    [HeroType.Might]: { attack: 0, defense: 4, spellPower: 1, knowledge: 1, name: "Beastmaster" },
    [HeroType.Magic]: { attack: 0, defense: 1, spellPower: 2, knowledge: 2, name: "Witch" },
  },
  [TownType.Inferno]: {
    [HeroType.Might]: { attack: 2, defense: 2, spellPower: 1, knowledge: 1, name: "Demoniac" },
    [HeroType.Magic]: { attack: 1, defense: 1, spellPower: 2, knowledge: 1, name: "Heretic" },
  },
  [TownType.Necropolis]: {
    [HeroType.Might]: { attack: 1, defense: 2, spellPower: 2, knowledge: 1, name: "Death Knight" },
    [HeroType.Magic]: { attack: 1, defense: 0, spellPower: 2, knowledge: 2, name: "Necromancer" },
  },
  [TownType.Rampart]: {
    [HeroType.Might]: { attack: 1, defense: 3, spellPower: 1, knowledge: 1, name: "Ranger" },
    [HeroType.Magic]: { attack: 0, defense: 2, spellPower: 1, knowledge: 2, name: "Druid" },
  },
  [TownType.Stronghold]: {
    [HeroType.Might]: { attack: 4, defense: 0, spellPower: 1, knowledge: 1, name: "Barbarian" },
    [HeroType.Magic]: { attack: 2, defense: 1, spellPower: 1, knowledge: 1, name: "Battle Mage" },
  },
  [TownType.Tower]: {
    [HeroType.Might]: { attack: 1, defense: 1, spellPower: 2, knowledge: 2, name: "Alchemist" },
    [HeroType.Magic]: { attack: 0, defense: 0, spellPower: 2, knowledge: 3, name: "Wizard" },
  },
};
