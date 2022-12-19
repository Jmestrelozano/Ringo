import React, { useEffect, useState } from "react";
import { getPetService } from "../../../data/petsServices/getPetServices";
import { AppStore } from "../../../domain/interfaces/store/storeInterface";
import { useAppDispatch, useAppSelector } from "../../../domain/store/store";
import { CardPet } from "../../components/cards/CardPet";
import { ModalInfoPet } from "../../components/modals/ModalInfoPet";
import { NavBar } from "../../components/navbar/NavBar";
import "../../styles/pages/home/stylesHome.css";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {
    pets: { data: dataPets },
    status,
  } = useAppSelector((store: AppStore) => store.pets);

  const [isModal, setIsModal] = useState(false);
  const [idPet, setIdPet] = useState<number>(0);
  const handleModal = () => setIsModal(!isModal);
  useEffect(() => {
    dispatch(getPetService());
  }, []);

  const dataPetUnique = dataPets.filter((pet) => pet.id === idPet);
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
            Al adoptar a un felino tu vida se transforma, tu tono de voz y tus espacios cambian, ya
            que ellos invaden todo comenzando por tu corazon. Conoce las historias de algunos
            felinos, diligencia el formulario y postúlate para adoptar, si resultas seleccionado por
            nuestras fundaciones aliadas se pondran en contacto contigo
          </p>
          <br />
        </div>

        <div className="container_pets">
          {dataPets.map((pet) => {
            return <CardPet pet={pet} action={handleModal} setIdPet={setIdPet} />;
          })}
        </div>
      </div>

      {isModal && <ModalInfoPet action={handleModal} data={dataPetUnique} isModal={isModal} />}
    </div>
  );
};

export default HomeScreen;
