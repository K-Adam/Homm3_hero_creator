import { Hero } from "@/models/hero";

export enum PrintFilter {
  Board,
  Cards,
  Both,
}

export enum CardMode {
  Folded,
  AutoDuplex,
  ManualDuplex,
}

export interface PrintState {
  heroes: Hero[];
  filter: PrintFilter;
  compensateForExtraMargin: boolean;
  extraMarginSize: number;
  showBacksides: boolean;
  cardMode: CardMode;
}
