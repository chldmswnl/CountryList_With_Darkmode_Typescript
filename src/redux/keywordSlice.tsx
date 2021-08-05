import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: string = "";

export const keywordSlice = createSlice({
  name: "keyword",
  initialState: INITIAL_STATE,
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = keywordSlice;
export const { setKeyword } = actions;
export default reducer;
