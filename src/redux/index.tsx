import { configureStore } from "@reduxjs/toolkit";
import { countryListSlice } from "./listSlice";

export const store = configureStore({
  reducer: {
    countryList: countryListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
