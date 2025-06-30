export interface Product{
    id: number,
    nom: string,
    preu: number
}


export const products : Product[] = [
  {
    id: 1,
    nom: "Plàtan",
    preu: 0.5,
  },
  {
    id: 2,
    nom: "Poma",
    preu: 0.8,
  },
  {
    id: 3,
    nom: "Pinya",
    preu: 5,
  },
  {
    id: 4,
    nom: "Meló",
    preu: 6,
  },
];
