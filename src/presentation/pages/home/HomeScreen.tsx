import React, { useEffect } from "react";
import { getPetService } from "../../../data/petsServices/getPetServices";
import { AppStore } from "../../../domain/interfaces/store/storeInterface";
import { useAppDispatch, useAppSelector } from "../../../domain/store/store";
import { CardPet } from "../../components/cards/CardPet";
import { NavBar } from "../../components/navbar/NavBar";
import "../../styles/pages/home/stylesHome.css";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {
    pets: { data: dataPets },
    status,
  } = useAppSelector((store: AppStore) => store.pets);

  useEffect(() => {
    dispatch(getPetService());
  }, []);
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="container_advertisement">
          <h2 className="title_advertisement">
            Adopta un cachorro
            <br />
            #DesdeCachorroHastaSiempre
          </h2>
          <p className="text_desc_advertisement">
            Al adoptar a un cachorro tu vida se transforma, tu tono de&nbsp;voz y tus espacios
            cambian, ya que ellos invaden todo comenzando por tu corazón. Conoce las historias de
            algunos cachorros, diligencia el formulario y postúlate para adoptar, si resultas
            seleccionado por nuestras fundaciones aliadas se pondrán&nbsp;contacto contigo
          </p>
          <br />
        </div>

        <div className="container_pets">
          {dataPets.map((pet) => {
            return <CardPet pet={pet} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
