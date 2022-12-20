import React from "react";
import { Pets } from "../../../domain/interfaces/slices/petsSlice/petSliceInterface";
import "../../styles/components/cards/stylesCardPet.css";

interface Props {
  pet: Pets;
  action: () => void;
  setIdPet: React.Dispatch<React.SetStateAction<number>>;
}
export const CardPet = ({ pet, setIdPet, action }: Props) => {
  return (
    <div key={pet.id} className="card_pet">
      <div className="container_img_pet">
        <img
          src={pet.imageFileName}
          alt={`Adopta a ${pet.name} tu felino`}
          title={`Adopta a ${pet.name} tu felino mimado`}
        />
      </div>
      <h3 className="title_pet">{pet.name}</h3>

      <input
        className="ref_pet"
        type={"button"}
        onClick={() => {
          action();
          setIdPet(pet.id);
        }}
      />
    </div>
  );
};
