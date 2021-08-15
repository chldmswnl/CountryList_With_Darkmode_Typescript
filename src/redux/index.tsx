import { configureStore } from "@reduxjs/toolkit";
import { countryNameSlice } from "./countryNameSlice";
import { keywordSlice } from "./keywordSlice";
import { countryListSlice } from "./listSlice";
import { colorThemeSlice } from "./colorThemeSlice";

export const store = configureStore({
  reducer: {
    countryList: countryListSlice.reducer,
    keyword: keywordSlice.reducer,
    countryName: countryNameSlice.reducer,
    colorTheme: colorThemeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
