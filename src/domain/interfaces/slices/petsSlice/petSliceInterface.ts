import { TypeStatus } from "../../global/global";

export interface Pets {
  id: number;
  name: string;
  gender: string;
  imageFileName: string;
  description: string;
  age: string;
}

export interface StatePetsSlice {
  pets: {
    data: Pets[];
    msg: string;
  };
  status: TypeStatus;
}
