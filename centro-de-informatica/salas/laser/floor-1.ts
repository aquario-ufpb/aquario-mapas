import type { Room } from "../../../types";

export const rooms: Room[] = [
  {
    id: "laser-101",
    location: "LASER 101",
    type: "classroom",
    description: "Sala de aula LASER 101",
    capacity: 40,
  },
  {
    id: "laser-102",
    location: "LASER 102",
    type: "classroom",
    description: "Sala de aula LASER 102",
    capacity: 35,
  },
  {
    id: "laser-103",
    location: "LASER 103",
    type: "lab-class",
    description: "Laboratório de aula LASER 103",
    capacity: 30,
  },
  {
    id: "laser-lab",
    location: "Laboratório LASER",
    type: "lab-research",
    description: "Laboratório de pesquisa LASER",
    labs: [],
  },
  {
    id: "corredor-laser-1",
    location: "Corredor",
    type: "corridor",
    description: "Corredor do 1º andar",
  },
  {
    id: "laser-104",
    location: "LASER 104",
    type: "classroom",
    description: "Sala de aula LASER 104",
    capacity: 45,
  },
  {
    id: "laser-105",
    location: "LASER 105",
    type: "classroom",
    description: "Sala de aula LASER 105",
    capacity: 40,
  },
  {
    id: "laser-106",
    location: "LASER 106",
    type: "classroom",
    description: "Sala de aula LASER 106",
    capacity: 35,
  },
  {
    id: "banheiro-laser-1",
    location: "Banheiro",
    type: "bathroom",
    description: "Banheiro unisex",
    gender: "unisex",
  },
  {
    id: "escada-laser-1",
    location: "Escada",
    type: "stairs",
    description: "Escada de acesso",
  },
];
