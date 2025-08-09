"use client";

import { Hero } from "@/models/hero";
import styles from "./HeroBoard.module.css";
import clsx from "clsx";
import { HeroType } from "@/models/town";

import MagicIcon from "@/assets/glyphs/magic.svg";
import MightIcon from "@/assets/glyphs/might.svg";
import HandIcon from "@/assets/glyphs/hand.svg";
import LevelOne from "@/assets/glyphs/level1.svg";
import LevelFour from "@/assets/glyphs/level4.svg";
import LevelSix from "@/assets/glyphs/level6.svg";
import ExpertIcon from "@/assets/glyphs/expert.svg";
import LevelDirectionIcon from "@/assets/level_direction.svg";

export default function HeroBoard({ hero }: { hero: Hero }) {
  return (
    <section className={clsx(styles.board, hero.town)}>
      <div
        className={clsx(styles.block, styles.portrait)}
        style={{ backgroundImage: `url("${hero.portrait.path}")` }}
      ></div>

      <div className={clsx(styles.block, styles.name)}>
        <figure className={styles.mightMagicIcon}>
          {hero.type === HeroType.Magic ? (
            <MagicIcon aria-label="Magic" className={styles.magic} />
          ) : (
            <MightIcon aria-label="Might" className={styles.might} />
          )}
        </figure>
        <h1>{hero.name}</h1>
        <h2>{hero.statistics.name}</h2>
      </div>

      <div className={clsx(styles.block, styles.stats)}>
        <div className={styles.stat}>
          <img src="images/attack.png" alt="Attack" />
          <span>{hero.statistics.attack}</span>
        </div>
        <div></div>
        <div className={styles.stat}>
          <img src="images/defense.png" alt="Defense" />
          <span>{hero.statistics.defense}</span>
        </div>
        <div></div>
        <div className={styles.stat}>
          <img src="images/power.png" alt="Spell Power" />
          <span>{hero.statistics.spellPower}</span>
        </div>
        <div></div>
        <div className={styles.stat}>
          <img src="images/knowledge.png" alt="Knowledge" />
          <span>{hero.statistics.knowledge}</span>
        </div>

        <div className={styles.abilitySpecialty}>
          <div className={styles.ability}>
            <h4>{hero.ability.name}</h4>
            <img src={hero.ability.path}></img>
          </div>
          <div className={styles.specialty}>
            <h4>Specialty</h4>
            <img src={hero.specialty.path}></img>
            <h5>{hero.specialty.name}</h5>
          </div>
        </div>
      </div>

      <div className={clsx(styles.block, styles.level)}>
        <table>
          <tbody>
            <tr className={styles.levelTitles}>
              <td className={styles.specialtyLevel}>
                <LevelOne aria-label="I" />
              </td>
              <td></td>
              <td>II</td>
              <td></td>
              <td>III</td>
              <td></td>
              <td className={styles.specialtyLevel}>
                <LevelFour aria-label="IV" />
              </td>
              <td></td>
              <td>V</td>
              <td></td>
              <td className={styles.specialtyLevel}>
                <LevelSix aria-label="VI" />
              </td>
              <td></td>
              <td>VII</td>
            </tr>
            <tr className={clsx(styles.levelBoxes, styles.intLevels)}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className={styles.levelEffects}>
              <td>
                <div className={styles.handLimit} aria-label="Hand limit: 4">
                  <HandIcon className={styles.handIcon} />
                  <span>4</span>
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div
                  className={styles.expertEffects}
                  aria-label="Expert effects: 1"
                >
                  <ExpertIcon className={styles.expertIcon} />
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div className={styles.handLimit} aria-label="Hand limit: 5">
                  <HandIcon className={styles.handIcon} />
                  <span>5</span>
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div
                  className={styles.expertEffects}
                  aria-label="Expert effects: 2"
                >
                  <ExpertIcon className={styles.expertIcon} />
                  <ExpertIcon className={styles.expertIcon} />
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div className={styles.handLimit} aria-label="Hand limit: 6">
                  <HandIcon className={styles.handIcon} />
                  <span>6</span>
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div
                  className={styles.expertEffects}
                  aria-label="Expert effects: 2"
                >
                  <ExpertIcon className={styles.expertIcon} />
                  <span>
                    <ExpertIcon className={styles.expertIcon} />
                    <ExpertIcon className={styles.expertIcon} />
                  </span>
                </div>
              </td>
              <td>
                <div className={styles.levelDirectionContainer}>
                  <LevelDirectionIcon className={styles.levelDirection} />
                </div>
              </td>
              <td>
                <div className={styles.handLimit} aria-label="Hand limit: 7">
                  <HandIcon className={styles.handIcon} />
                  <span>7</span>
                </div>
              </td>
            </tr>
            <tr className={clsx(styles.levelBoxes, styles.fracLevels)}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
