import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Data = { quote: string };

export type KanyeState = {
  data: Data;
  isLoading: boolean;
  error: Error | null;
};

const initialState: KanyeState = {
  data: { quote: "click that button" },
  isLoading: false,
  error: null,
};

export const kanyeSlice = createSlice({
  name: "kanye",
  initialState,
  reducers: {
    load: (state) => {
      state.isLoading = true;
    },
    loadSuccess: (state, action: PayloadAction<Data>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    loadFail: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { load, loadSuccess, loadFail } = kanyeSlice.actions;

export const selectKanye = (state: RootState) => state.kanyeQuote;

export default kanyeSlice.reducer;
