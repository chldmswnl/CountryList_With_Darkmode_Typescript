import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: string = "";

export const countryNameSlice = createSlice({
  name: "countryName",
  initialState: INITIAL_STATE,
  reducers: {
    setCountryName(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = countryNameSlice;
export const { setCountryName } = actions;
export default reducer;
