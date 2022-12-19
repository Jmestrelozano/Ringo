import React from "react";
import { Pets } from "../../../domain/interfaces/slices/petsSlice/petSliceInterface";
import { BaseURL } from "../../global/global";
import "../../styles/modals/stylesModalInfoPet.css";

interface Props {
  isModal: boolean;
  action: () => void;
  data: Pets[];
}
export const ModalInfoPet = ({ isModal, action, data }: Props) => {
  const { name, age, gender, description, imageFileName } = data[0];
  const urlImg = `${BaseURL}/src/presentation/assets/images/${imageFileName}`;
  return (
    <>
      {isModal && (
        <div className="modal_pet">
          <div className="modal_dialog_pet">
            <div className="modal_header_pet">
              <button onClick={action} className="btn_close">
                ×
              </button>
            </div>
            <div className="modal_body_pet">
              <h3 className="title_modal_pet">{name}</h3>

              <div className="container_img_modal_pet">
                <img src={urlImg} />
              </div>

              <div className="modal_info_pet">
                <div className="modal_row_pet">
                  <h4>Edad</h4>
                  <p>{age}</p>
                </div>
                <div className="modal_row_pet">
                  <h4>Genero</h4>
                  <p>{gender}</p>
                </div>

                <p className="modal_description_pet">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
