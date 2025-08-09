import { createAppSlice } from "@/lib/createAppSlice";
import { CardMode, PrintFilter, PrintState } from "./printModel";
import { stringifyHero } from "../serializeHero";

const initialState: PrintState = {
  heroes: [],
  filter: PrintFilter.Both,
  compensateForExtraMargin: false,
  extraMarginSize: 5,
  showBacksides: false,
  cardMode: CardMode.Folded,
};

export const printSlice = createAppSlice({
  name: "print",
  initialState,
  selectors: {
    printState: (state: PrintState) => state,
  },
  reducers: {
    // Hero manipulation
    addHero: (state: PrintState, { payload: hero }) => {
      state.heroes.push(hero);
    },
    addHeroes: (state: PrintState, { payload: heroes }) => {
      state.heroes.push(...heroes);
    },
    removeHero: (state: PrintState, { payload: hero }) => {
      state.heroes = state.heroes.filter((h) => {
        return stringifyHero(h) !== stringifyHero(hero);
      });
    },
    removeAllHeroes: (state: PrintState) => {
      state.heroes = [];
    },
    setFilter: (state: PrintState, { payload: filter }) => {
      state.filter = filter;
    },
    setCompensateForExtraMargin: (
      state: PrintState,
      { payload: compensate }
    ) => {
      state.compensateForExtraMargin = compensate;
    },
    setExtraMarginSize: (state: PrintState, { payload: size }) => {
      state.extraMarginSize = size;
    },
    setShowBacksides: (state: PrintState, { payload: show }) => {
      state.showBacksides = show;
    },
    setCardMode: (state: PrintState, { payload: mode }) => {
      state.cardMode = mode;
    },
  },
});

export const { printState } = printSlice.selectors;
export const {
  addHero,
  addHeroes,
  removeHero,
  removeAllHeroes,
  setFilter,
  setCompensateForExtraMargin,
  setExtraMarginSize,
  setShowBacksides,
  setCardMode,
} = printSlice.actions;
export const printReducer = printSlice.reducer;
