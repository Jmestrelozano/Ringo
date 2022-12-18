import React, { useEffect } from "react";
import { getPetService } from "../../../data/petsServices/getPetServices";
import { useAppDispatch } from "../../../domain/store/store";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPetService());
  }, []);
  return <div>HomeScreen</div>;
};

export default HomeScreen;
