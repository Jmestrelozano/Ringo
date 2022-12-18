import React, { useEffect } from "react";
import { getPetService } from "../../../data/petsServices/getPetServices";

const HomeScreen = () => {
  useEffect(() => {
    console.log(getPetService());
  }, []);
  return <div>HomeScreen</div>;
};

export default HomeScreen;
