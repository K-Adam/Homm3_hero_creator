import { Hero } from "@/models/hero";
import HeroCard from "./HeroCard";
import styles from "./HeroCards.module.css";
import { SpecialtyLevel } from "@/models/specialty";

export default function HeroCards({ hero }: { hero: Hero }) {
  return (
    <div className={styles.cards}>
      <HeroCard hero={hero} specialtyLevel={SpecialtyLevel.One} />
      <HeroCard hero={hero} specialtyLevel={SpecialtyLevel.Four} />
      <HeroCard hero={hero} specialtyLevel={SpecialtyLevel.Six} />
    </div>
  );
}
