import { Hero } from "@/models/hero";
import { fileOpen } from "browser-fs-access";
import saveAs from "file-saver";
import { normalizeString } from "./normalizeString";

// TODO: Define zod schema

interface JsonFormat {
  herocreator: "0.1";
  hero: Hero;
}

function parseHero(data: string): Hero {
  const obj = JSON.parse(data);

  if (!obj.herocreator) {
    throw new Error("Invalid format!");
  }

  return (obj as JsonFormat).hero;
}

export function stringifyHero(hero: Hero): string {
  const data = { herocreator: "0.1", hero };
  return JSON.stringify(data, null, 2);
}

export async function loadHero(): Promise<Hero> {
  const blob = await fileOpen({
    mimeTypes: ["application/json"],
    extensions: [".homm3.json"],
  });
  const text = await blob.text();
  return parseHero(text);
}

export async function loadHeroes(): Promise<Hero[]> {
  const blobs = await fileOpen({
    mimeTypes: ["application/json"],
    extensions: [".homm3.json"],
    multiple: true,
  });
  const texts = await Promise.all(blobs.map((blob) => blob.text()));
  return texts.map((text) => parseHero(text));
}

export function saveHero(hero: Hero) {
  saveAs(
    new Blob([stringifyHero(hero)], {
      type: "application/json;charset=utf-8",
    }),
    `${normalizeString(hero.name)}.homm3.json`
  );
}
