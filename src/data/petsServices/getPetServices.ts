import axios from "axios";
import pets from "../json/pets.json";

export const getPetService = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5173/src/data/json/pets.json");

    const result = response.data;
    if (response.status !== 200) {
      console.log("error");
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
