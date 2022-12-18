import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pets, StatePetsSlice } from "../../interfaces/slices/petsSlice/petSlice";

const initialState: StatePetsSlice = {
  pets: [],
};
export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pets>) => {},
  },
});

export const { setPets } = petsSlice.actions;

export default petsSlice.reducer;
