"use client";

import HeroBoard from "./HeroBoard";
import HeroCards from "./HeroCards";
import { useAppSelector } from "@/lib/hooks";
import { printState } from "@/lib/features/printSlice";
import { pairs } from "@/lib/pairs";
import { CardMode, PrintFilter, PrintState } from "@/lib/features/printModel";
import { useEffect, useRef } from "react";
import { Hero } from "@/models/hero";
import styles from "./PrintView.module.css";
import clsx from "clsx";

const showBoards = (state: PrintState): boolean =>
  [PrintFilter.Both, PrintFilter.Board].includes(state.filter);

const showCards = (state: PrintState): boolean =>
  [PrintFilter.Both, PrintFilter.Cards].includes(state.filter);

const marginToScale = (state: PrintState): string => {
  return state.compensateForExtraMargin
    ? ((210 + state.extraMarginSize * 2) / 210).toFixed(4)
    : "1.0";
};

interface Backface {
  type: "backface";
  flip?: boolean;
}

type CardRow = Hero | Backface;

function isBackface(card: CardRow): card is Backface {
  return (card as Backface).type === "backface";
}

function getCardPrintList(
  state: PrintState
): Array<[CardRow, CardRow] | [CardRow]> {
  if (!state.showBacksides) return pairs(state.heroes);

  switch (state.cardMode) {
    case CardMode.Folded:
      return state.heroes.map((hero) => [
        hero,
        { type: "backface", flip: true },
      ]);
    case CardMode.AutoDuplex:
      return pairs(state.heroes).flatMap((pair) => [
        pair,
        pair.length === 2
          ? [{ type: "backface" }, { type: "backface" }]
          : [{ type: "backface" }],
      ]);
    case CardMode.ManualDuplex:
      const heroPairs = pairs(state.heroes);
      return [
        ...heroPairs,
        ...heroPairs.map(
          (pair) =>
            pair.map(() => ({
              type: "backface",
            })) as [Backface, Backface] | [Backface]
        ),
      ];
    default:
      throw new Error(`Unknown card mode ${state.cardMode}`);
  }
}

export default function PrintView() {
  const state = useAppSelector(printState);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("--adjust-scale", marginToScale(state));
    }
  }, [state]);
  return (
    <div ref={divRef}>
      {showBoards(state)
        ? pairs(state.heroes).map((heroes, li) => {
            return (
              <div className="portrait page" key={li}>
                <div>
                  {heroes.map((hero, hi) => (
                    <HeroBoard hero={hero} key={hi} />
                  ))}
                </div>
              </div>
            );
          })
        : null}

      {showCards(state)
        ? getCardPrintList(state).map((pair, li) => {
            return (
              <div className="landscape page" key={li}>
                <div>
                  {pair.map((card, hi) =>
                    isBackface(card) ? (
                      <div
                        className={clsx(
                          styles.backfaces,
                          card.flip ? styles.flip : null
                        )}
                        key={hi}
                      >
                        <img alt="backface" src="card_back.png" />
                        <img alt="backface" src="card_back.png" />
                        <img alt="backface" src="card_back.png" />
                      </div>
                    ) : (
                      <HeroCards hero={card} key={hi} />
                    )
                  )}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
