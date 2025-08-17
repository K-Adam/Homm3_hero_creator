import { Hero } from "@/models/hero";
import styles from "./HeroCard.module.css";
import clsx from "clsx";
import { SpecialtyLevel } from "@/models/specialty";

import { textToComponent, TextToComponentProps } from "@/lib/textToComponent";

import SpellOptionsIcon from "@/assets/spell_options.svg";
import ArrowIcon from "@/assets/arrow.svg";
import EmpowerIcon from "@/assets/glyphs/empower.svg";
import { townColors } from "@/models/color";
import { useBackground } from "@/hooks/background";

const textToComponentProps: TextToComponentProps = {
  renderSpell: (props) => (
    <div className={styles.spellContainer}>
      <div className={clsx(styles.spellOptions, styles.flip)}>
        <SpellOptionsIcon className={styles.spellOptionsIcon} />
        <span className={styles.spellPowerIcon}>
          <EmpowerIcon />
        </span>
        <div className={styles.powerCount}>
          <span>{props.power[0]}</span>
          <span>{props.power[1]}</span>
          <span>{props.power[2]}</span>
        </div>
      </div>
      {props.effectIcon ? (
        <>
          <div className={styles.arrow}>
            <ArrowIcon />
          </div>
          <div className={styles.spellOptions}>
            <SpellOptionsIcon className={styles.spellOptionsIcon} />
            <span className={styles.spellPowerIcon}>{props.effectIcon}</span>
            <div className={styles.powerCount}>
              <span>{props.effect[0]}</span>
              <span>{props.effect[1]}</span>
              <span>{props.effect[2]}</span>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.spellOptionsText}>
          <span>{props.effect[0]}</span>
          <span>{props.effect[1]}</span>
          <span>{props.effect[2]}</span>
        </div>
      )}
    </div>
  ),
  renderUnitStats: (props) => (
    <div className={styles.unitStats}>
      <div>
        <img className={styles.unitIcon} src="images/attack.png" alt="Attack" />{" "}
        {props.attack}
      </div>
      <div>
        <img
          className={styles.unitIcon}
          src="images/defense.png"
          alt="Defense"
        />{" "}
        {props.defense}
      </div>
      <div>
        <img className={styles.unitIcon} src="images/hp.png" alt="Health" />{" "}
        {props.health}
      </div>
      <div>
        <img
          className={styles.unitIcon}
          src="images/initiative.png"
          alt="Speed"
        />{" "}
        {props.speed}
      </div>
    </div>
  ),
};

export default function HeroCard({
  hero,
  specialtyLevel,
}: {
  hero: Hero;
  specialtyLevel: SpecialtyLevel;
}) {
  const townColor = townColors[hero.town];
  const bgUrl = useBackground(
    hero.customClass?.background ?? townColor.background ?? townColor.color
  );

  return (
    <div
      className={clsx(styles.card, styles[`specialty${specialtyLevel}`])}
      style={{ "--name-background": bgUrl } as React.CSSProperties}
    >
      <div className={clsx(styles.block, styles.content)}>
        <img
          className={styles.icon}
          src={hero.specialty.path}
          alt="Specialty Icon"
        />
        <h3>{hero.specialty.name}</h3>
        <div className={styles.description}>
          <div>
            {textToComponent(
              hero.specialtyContent[specialtyLevel],
              textToComponentProps
            )}
          </div>
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
