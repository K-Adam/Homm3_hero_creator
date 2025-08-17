import { abilities, Ability } from "./ability";
import { monsterSpecialties, Specialty } from "./specialty";
import { SpecialtyContent, specialtyContentExample } from "./specialtyContent";
import { classStats, HeroType, Statistics, TownType } from "./town";

export interface Portrait {
  name: string;
  path: string;
}

export interface CustomClass {
  statistics: Statistics;
  color: string;
  background: string;
}

export interface Hero {
  name: string;
  town: TownType;
  type: HeroType;
  statistics: Statistics;
  portrait: Portrait;
  ability: Ability;
  specialty: Specialty;
  specialtyContent: SpecialtyContent;
  customClass?: CustomClass;
}

// prettier-ignore
export const portraits: Portrait[] = [
  {
    name: "Adela",
    path: "heroes/adela.png",
  },
  {
    name: "Aeris",
    path: "heroes/aeris.png",
  },
  {
    name: "Aine",
    path: "heroes/aine.png",
  },
  {
    name: "Christian",
    path: "heroes/christian.png",
  },
  {
    name: "Coronius",
    path: "heroes/coronius.png",
  },
  {
    name: "Dessa",
    path: "heroes/dessa.png",
  },
  {
    name: "Fafner",
    path: "heroes/fafner.png",
  },
  {
    name: "Crag Hack",
    path: "heroes/hack.png",
  },
  {
    name: "Isra",
    path: "heroes/isra.png",
  },
  {
    name: "Lorelei",
    path: "heroes/lorelei.png",
  },
  {
    name: "Moandor",
    path: "heroes/moandor.png",
  },
  {
    name: "Shakti",
    path: "heroes/shakti.png",
  },
];

export const initialHero = {
  name: "Hero Name",
  town: TownType.Dungeon,
  type: HeroType.Might,
  portrait: portraits[0],
  statistics: classStats[TownType.Dungeon][HeroType.Might],
  ability: abilities[1],
  specialty: monsterSpecialties[0],
  specialtyContent: specialtyContentExample,
};
