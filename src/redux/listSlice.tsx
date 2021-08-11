import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countryType } from "Mymodule";

const INITIAL_STATE: countryType[] = [];

export const countryListSlice = createSlice({
  name: "countryList",
  initialState: INITIAL_STATE,
  reducers: {
    setCountryList(state, action: PayloadAction<countryType[]>) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = countryListSlice;
export const { setCountryList } = actions;
export default reducer;
