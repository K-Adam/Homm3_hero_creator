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
import MoraleNegativeIcon from "@/assets/glyphs/morale_negative.svg";
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
  ":morale_negative:": (
    <MoraleNegativeIcon
      aria-label="Negative Morale"
      className="textIcon"
      style={{ color: "#a8a8a7" }}
    />
  ),
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
};

type IconToken = keyof typeof iconMap;

interface UnitStatProps {
  attack: number;
  defense: number;
  health: number;
  speed: number;
}

interface SpellProps {
  power: [number, number, number];
  effect: [React.ReactNode, React.ReactNode, React.ReactNode];
  effectIcon?: React.ReactNode;
}

export interface TextToComponentProps {
  renderUnitStats?: (props: UnitStatProps) => React.ReactNode;
  renderSpell?: (props: SpellProps) => React.ReactNode;
}

export function textToComponent(
  text: string,
  props: TextToComponentProps = {}
): React.ReactNode {
  const re = /(\*\*|:[a-z_]+:|:stats{[\s;0-9]*}:|:spell{.*?(?=}:)}:|\n\#|\n)/g;
  let last = 0;
  let result: React.ReactNode = null;

  const append = (node: React.ReactNode) => {
    result =
      result === null ? (
        node
      ) : (
        <>
          {result}
          {node}
        </>
      );
  };

  if (text[0] === "#") {
    text = "\n" + text;
  }

  const matches = Array.from(text.matchAll(re));
  for (const m of matches) {
    const tok = m[1];
    const tokStart = m.index!;
    const tokEnd = tokStart + tok.length;

    // If we've already advanced past this (due to consuming bold/heading), skip it
    if (tokStart < last) continue;

    // Append any plain text before this token
    if (tokStart > last) {
      append(text.slice(last, tokStart));
    }

    if (tok === "**") {
      const start = tokEnd; // after opening **
      const close = text.indexOf("**", start);
      if (close === -1) {
        append("**");
        last = start; // match original behavior when there's no closing **
      } else {
        append(
          <strong>{textToComponent(text.slice(start, close), props)}</strong>
        );
        last = close + 2; // jump past closing **
      }
    } else if (tok === "\n#") {
      const start = tokEnd;
      const close = text.indexOf("\n", start);
      if (close === -1) {
        append(<h4>{text.slice(start)}</h4>);
        last = text.length;
      } else {
        append(<h4>{text.slice(start, close)}</h4>);
        last = close + 1; // include trailing newline
      }
    } else if (tok === "\n") {
      append(<br />);
      last = tokEnd;
    } else if (tok.startsWith(":stats{")) {
      const stats = tok
        .slice(7, -2)
        .split(";")
        .map((s) => parseInt(s.trim()));

      if (stats.length !== 4) {
        append(
          <span className="text-danger">Stats must have 4 components</span>
        );
      }

      append(
        props.renderUnitStats ? (
          props.renderUnitStats({
            attack: stats[0],
            defense: stats[1],
            health: stats[2],
            speed: stats[3],
          })
        ) : (
          <span className="text-danger">No renderUnitStats available</span>
        )
      );
      last = tokEnd;
    } else if (tok.startsWith(":spell{")) {
      const spellParts = tok
        .slice(7, -2)
        .trim()
        .slice(1, -1)
        .split(/\}\s*;\s*\{/)
        .map((s) =>
          s
            .trim()
            .split(";")
            .map((p) => p.trim())
        );

      if (spellParts.length === 3) {
        const [power, effect, effectIcon] = [
          spellParts[0].map((p) => parseInt(p)) as [number, number, number],
          spellParts[1].map((p) => textToComponent(p, props)) as [
            React.ReactNode,
            React.ReactNode,
            React.ReactNode
          ],
          spellParts[2][0],
        ];
        append(
          props.renderSpell ? (
            props.renderSpell({
              power,
              effect,
              effectIcon: iconMap[effectIcon as IconToken],
            })
          ) : (
            <span className="text-danger">No renderSpell available</span>
          )
        );
      } else if (spellParts.length === 2) {
        const [power, effect] = [
          spellParts[0].map((p) => parseInt(p)) as [number, number, number],
          spellParts[1].map((p) => textToComponent(p, props)) as [
            React.ReactNode,
            React.ReactNode,
            React.ReactNode
          ],
        ];
        append(
          props.renderSpell ? (
            props.renderSpell({ power, effect })
          ) : (
            <span className="text-danger">No renderSpell available</span>
          )
        );
      } else {
        append(
          <span className="text-danger">Spell must have 2 or 3 components</span>
        );
      }
      last = tokEnd;
    } else if ((tok as IconToken) in iconMap) {
      append(iconMap[tok as IconToken]);
      last = tokEnd;
    } else {
      append(tok);
      last = tokEnd;
    }
  }

  // Trailing text after the last token
  if (last < text.length) {
    append(text.slice(last));
  }

  return result ?? null;
}
