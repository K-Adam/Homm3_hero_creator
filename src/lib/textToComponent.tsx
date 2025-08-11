import React from "react";
import { JSX } from "react";

import OrDividerIcon from "@/assets/glyphsInternal/or_divider.svg";

import InstantIcon from "@/assets/glyphs/instant.svg";
import OngoingIcon from "@/assets/glyphs/ongoing.svg";
import PermanentIcon from "@/assets/glyphs/permanent.svg";

import AttackIcon from "@/assets/glyphs/attack.svg";
import DefenseIcon from "@/assets/glyphs/defense.svg";
import EmpowerIcon from "@/assets/glyphs/empower.svg";
import HealthPointsIcon from "@/assets/glyphs/health_points.svg";
import MapIcon from "@/assets/glyphs/map.svg";
import SpellIcon from "@/assets/glyphs/spellpower.svg";

import MovementIcon from "@/assets/glyphs/movement.svg";
import InitiativeIcon from "@/assets/glyphs/initiative.svg";
import ActivationIcon from "@/assets/glyphs/activation.svg";
import MoraleIcon from "@/assets/glyphs/morale_positive.svg";
import DamageIcon from "@/assets/glyphs/damage-yellow.svg";
import ParalysisIcon from "@/assets/glyphs/paralysis.svg";

import GoldIcon from "@/assets/glyphs/gold.svg";
import ValuableIcon from "@/assets/glyphs/valuablegreater.svg";
import BuildingMaterialIcon from "@/assets/glyphs/building_materials.svg";

import UnitGroundIcon from "@/assets/glyphsInternal/unit_ground.svg";
import UnitFlyingIcon from "@/assets/glyphsInternal/unit_flying.svg";
import UnitRangedIcon from "@/assets/glyphs/unit_ranged.svg";

import TreasureIcon from "@/assets/glyphs/treasure.svg";
import ResourceIcon from "@/assets/glyphs/resource_die.svg";

import NecroIcon from "@/assets/glyphs/necro-yellow.svg";

import ExpertIcon from "@/assets/glyphs/expert.svg";
import HandLimitIcon from "@/assets/glyphs/hand.svg";
import ExperienceIcon from "@/assets/glyphs/experience.svg";
import ReinforceIcon from "@/assets/glyphs/reinforce.svg";

import UnitAttackIcon from "@/assets/glyphs/unit_attack-yellow.svg";
import UnitRetaliateIcon from "@/assets/glyphs/unit_retaliate.svg";
import UnitSpecialIcon from "@/assets/glyphs/unit_other.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const iconMap: Record<string, JSX.Element> = {
  ":instant:": <InstantIcon aria-label="Instant" className="textIcon" />,
  ":ongoing:": <OngoingIcon aria-label="Ongoing" className="textIcon" />,
  ":permanent:": (
    <PermanentIcon
      viewBox="-10 -200 1722 1250"
      aria-label="Permanent"
      className="textIcon"
    />
  ),

  ":attack:": <AttackIcon aria-label="Attack" className="textIcon" />,
  ":defense:": <DefenseIcon aria-label="Defense" className="textIcon" />,
  ":empower:": <EmpowerIcon aria-label="Empower" className="textIcon" />,

  ":health:": <HealthPointsIcon aria-label="Health" className="textIcon" />,
  ":map:": <MapIcon aria-label="Map" className="textIcon" />,
  ":spell:": <SpellIcon aria-label="Spell" className="textIcon" />,

  ":movement:": <MovementIcon aria-label="Movement" className="textIcon" />,
  ":initiative:": (
    <InitiativeIcon aria-label="Initiative" className="textIcon" />
  ),
  ":activation:": (
    <ActivationIcon aria-label="Activation" className="textIcon" />
  ),
  ":morale:": <MoraleIcon aria-label="Morale" className="textIcon" />,
  ":damage:": <DamageIcon aria-label="Damage" className="textIcon" />,
  ":paralysis:": <ParalysisIcon aria-label="Paralysis" className="textIcon" />,

  ":gold:": <GoldIcon aria-label="Gold" className="textIcon" />,
  ":valuable:": <ValuableIcon aria-label="Valuable" className="textIcon" />,
  ":building:": (
    <BuildingMaterialIcon aria-label="Building Material" className="textIcon" />
  ),

  ":unit_ground:": (
    <UnitGroundIcon
      viewBox="0 0 76 76"
      aria-label="Ground unit"
      className="textIcon"
    >
      <path fill="currentColor" />
    </UnitGroundIcon>
  ),
  ":unit_flying:": (
    <UnitFlyingIcon aria-label="Flying unit" className="textIcon" />
  ),
  ":unit_ranged:": (
    <UnitRangedIcon aria-label="Ranged unit" className="textIcon" />
  ),

  ":treasure:": <TreasureIcon aria-label="Treasure" className="textIcon" />,
  ":resource:": <ResourceIcon aria-label="Resource" className="textIcon" />,

  ":necro:": <NecroIcon aria-label="Necro" className="textIcon" />,

  ":expert:": <ExpertIcon aria-label="Expert" className="textIcon" />,
  ":hand_limit:": (
    <HandLimitIcon aria-label="Hand limit" className="textIcon" />
  ),
  ":experience:": (
    <ExperienceIcon aria-label="Experience" className="textIcon" />
  ),
  ":reinforce:": <ReinforceIcon aria-label="Reinforce" className="textIcon" />,

  ":unit_attack:": (
    <UnitAttackIcon aria-label="Unit attack" className="textIcon" />
  ),
  ":unit_retaliate:": (
    <UnitRetaliateIcon aria-label="Unit retaliate" className="textIcon" />
  ),
  ":unit_special:": (
    <UnitSpecialIcon aria-label="Unit Special acion" className="textIcon" />
  ),

  ":bronze:": <FontAwesomeIcon icon={faStar} className="bronze" />,
  ":silver:": <FontAwesomeIcon icon={faStar} className="silver" />,
  ":golden:": <FontAwesomeIcon icon={faStar} className="golden" />,
  ":azure:": <FontAwesomeIcon icon={faStar} className="azure" />,

  ":or:": (
    <OrDividerIcon
      aria-label="Or"
      className="textIcon"
      style={{
        width: "15mm",
        height: "auto",
        marginTop: "0.75mm",
        marginBottom: "0.5mm",
      }}
    />
  ),
  "\n": <br />,
};

export function textToComponent(text: string): React.ReactNode {
  const regex = /((?::[a-z_]+:)|\n)/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (iconMap[part]) {
          return React.cloneElement(iconMap[part], { key: index });
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
