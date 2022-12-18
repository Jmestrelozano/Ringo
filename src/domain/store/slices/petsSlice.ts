import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeStatus } from "../../interfaces/global/global";
import { Pets, StatePetsSlice } from "../../interfaces/slices/petsSlice/petSlice";

const initialState: StatePetsSlice = {
  pets: {
    data: [],
    msg: "",
  },
  status: TypeStatus.NONE,
};
export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    ATTEMPT_PETS: (state) => {
      state.status = TypeStatus.LOADING;
    },
    SUCCESS_PETS: (state, action: PayloadAction<Pets[]>) => {
      state.pets.data = action.payload;
    },
    FAILURE_PETS: (state, action: PayloadAction<string>) => {
      state.pets.data = [];
      state.pets.msg = action.payload;
      state.status = TypeStatus.FAILURE;
    },
  },
});

export const { ATTEMPT_PETS, SUCCESS_PETS, FAILURE_PETS } = petsSlice.actions;

export default petsSlice.reducer;
