import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { ATTEMPT_PETS, FAILURE_PETS, SUCCESS_PETS } from "../../domain/store/slices/petsSlice";
import { BaseURL } from "../config";

export const getPetService = () => async (dispatch: Dispatch) => {
  dispatch(ATTEMPT_PETS());
  try {
    const url = `${BaseURL}/src/data/json/pets.json`;
    const response = await axios.get(url, {
      withCredentials: false,

      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    });

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
