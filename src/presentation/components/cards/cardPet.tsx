import React from "react";
import { Pets } from "../../../domain/interfaces/slices/petsSlice/petSliceInterface";
import "../../styles/components/cards/stylesCardPet.css";

interface Props {
  pet: Pets;
}
export const CardPet = ({ pet }: Props) => {
  const urlImg = `http://127.0.0.1:5173/src/presentation/assets/images/${pet.imageFileName}`;
  return (
    <div key={pet.id} className="card_pet">
      <div className="container_img_pet">
        <img
          src={urlImg}
          alt={`Adopta a ${pet.name} tu felino`}
          title={`Adopta a ${pet.name} tu felino mimado`}
        />
      </div>
      <h3 className="title_pet">{pet.name}</h3>
    </div>
  );
};
