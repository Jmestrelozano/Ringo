export interface Pets {
  id: number;
  name: string;
  gender: string;
  imageFileName: string;
  description: string;
  age: string;
}

export interface StatePetsSlice {
  pets: Pets[];
}
