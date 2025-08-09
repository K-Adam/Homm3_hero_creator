import React from "react";
import { JSX } from "react";

import OrDividerIcon from "@/assets/or_divider.svg";
import InstantIcon from "@/assets/glyphs/instant.svg";
import OngoingIcon from "@/assets/glyphs/ongoing.svg";
import AttackIcon from "@/assets/glyphs/attack.svg";
import DefenseIcon from "@/assets/glyphs/defense.svg";
import HealthPointsIcon from "@/assets/glyphs/health_points.svg";
import MapIcon from "@/assets/glyphs/map.svg";

import MovementIcon from "@/assets/glyphs/movement.svg";
import InitiativeIcon from "@/assets/glyphs/initiative.svg";
import ActivationIcon from "@/assets/glyphs/activation.svg";
import MoraleIcon from "@/assets/glyphs/morale_positive.svg";
import DamageIcon from "@/assets/glyphs/damage.svg";

import GoldIcon from "@/assets/glyphs/gold.svg";
import ValuableIcon from "@/assets/glyphs/valuablegreater.svg";
import BuildingMaterialIcon from "@/assets/glyphs/building_materials.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, JSX.Element> = {
  ":instant:": <InstantIcon aria-label="Instant" className="textIcon" />,
  ":ongoing:": <OngoingIcon aria-label="Ongoing" className="textIcon" />,
  ":attack:": <AttackIcon aria-label="Attack" className="textIcon" />,
  ":defense:": <DefenseIcon aria-label="Defense" className="textIcon" />,
  ":health:": <HealthPointsIcon aria-label="Health" className="textIcon" />,
  ":map:": <MapIcon aria-label="Map" className="textIcon" />,

  ":movement:": <MovementIcon aria-label="Movement" className="textIcon" />,
  ":initiative:": (
    <InitiativeIcon aria-label="Initiative" className="textIcon" />
  ),
  ":activation:": (
    <ActivationIcon aria-label="Activation" className="textIcon" />
  ),
  ":morale:": <MoraleIcon aria-label="Morale" className="textIcon" />,
  ":damage:": <DamageIcon aria-label="Damage" className="textIcon" />,

  ":gold:": <GoldIcon aria-label="Gold" className="textIcon" />,
  ":valuable:": <ValuableIcon aria-label="Valuable" className="textIcon" />,
  ":building:": (
    <BuildingMaterialIcon aria-label="Building Material" className="textIcon" />
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
