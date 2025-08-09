import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { printSlice } from "./features/printSlice";

const rootReducer = combineSlices(printSlice);

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
