import type { Room } from "../../../types";

export const rooms: Room[] = [
  {
    id: "corredor",
    location: "Corredor",
    type: "corridor",
    description: "Corredor",
  },
  {
    id: "banheiro-feminino",
    location: "Banheiro Feminino",
    type: "bathroom",
    description: "Banheiro Feminino",
    gender: "female",
  },
  {
    id: "banheiro-masculino",
    location: "Banheiro Masculino",
    type: "bathroom",
    description: "Banheiro Masculino",
    gender: "male",
  },
  {
    id: "cebraspe",
    location: "Cebraspe",
    type: "lab-research",
    description: "Laboratório de Pesquisa",
    labs: ["cebraspe"],
  },
  {
    id: "tns",
    location: "TNS",
    type: "lab-research",
    description: "TNS",
    labs: ["tns-latam"],
  },
  {
    id: "syncro",
    location: "SYNCRO",
    type: "lab-research",
    description: "Laboratório de Pesquisa",
    labs: ["synchro"],
  },
  {
    id: "vsoft",
    location: "Vsoft",
    type: "lab-research",
    description: "Vsoft",
    labs: ["vsoft"],
  },
];
