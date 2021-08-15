import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: string = "light";

export const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState: INITIAL_STATE,
  reducers: {
    setColorTheme(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = colorThemeSlice;
export const { setColorTheme } = actions;
export default reducer;
