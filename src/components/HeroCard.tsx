import { Hero } from "@/models/hero";
import styles from "./HeroCard.module.css";
import clsx from "clsx";
import { SpecialtyLevel } from "@/models/specialty";

import { textToComponent } from "@/lib/textToComponent";

export default function HeroCard({
  hero,
  specialtyLevel,
}: {
  hero: Hero;
  specialtyLevel: SpecialtyLevel;
}) {
  return (
    <div
      className={clsx(
        styles.card,
        hero.town,
        styles[`specialty${specialtyLevel}`]
      )}
    >
      <div className={clsx(styles.block, styles.content)}>
        <img
          className={styles.icon}
          src={hero.specialty.path}
          alt="Specialty Icon"
        />
        <h3>{hero.specialty.name}</h3>
        <div className={styles.description}>
          {textToComponent(hero.specialtyContent[specialtyLevel])}
        </div>
      </div>
      <div
        className={clsx(styles.portrait, styles.block)}
        style={{ backgroundImage: `url("${hero.portrait.path}")` }}
      ></div>
      <div className={clsx(styles.level, styles.block)}>
        <div className={styles.levelIcon}></div>
      </div>
    </div>
  );
}
