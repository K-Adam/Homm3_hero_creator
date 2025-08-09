export enum SpecialtyLevel {
  One = 1,
  Four = 4,
  Six = 6,
}

export interface Specialty {
  name: string;
  path: string;
}

// prettier-ignore
export const monsterSpecialties: Specialty[] = [
  {
    name: "Evil Eyes",
    path: "/monsters/evil_eyes.png"
  },
  {
    name: "Harpies",
    path: "/monsters/harpies.png"
  },
  {
    name: "Liches",
    path: "/monsters/liches.png"
  },
  {
    name: "Nagas",
    path: "/monsters/nagas.png"
  },
  {
    name: "Pegasi",
    path: "/monsters/pegasi.png"
  },
  {
    name: "Troglodytes",
    path: "/monsters/troglodytes.png"
  }
];
