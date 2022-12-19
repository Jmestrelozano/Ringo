import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { ATTEMPT_PETS, FAILURE_PETS, SUCCESS_PETS } from "../../domain/store/slices/petsSlice";
import { BaseURL } from "../config";

export const getPetService = () => async (dispatch: Dispatch) => {
  dispatch(ATTEMPT_PETS());
  try {
    const url = `${BaseURL}/src/data/json/pets.json`;
    console.log(BaseURL);
    const response = await axios.get(url);

    const result = response.data;
    if (response.status !== 200) {
      dispatch(FAILURE_PETS("Fallo en la conexion"));
    }

    dispatch(SUCCESS_PETS(result));
  } catch (error: any) {
    dispatch(FAILURE_PETS(error));
    throw error;
  }
};
