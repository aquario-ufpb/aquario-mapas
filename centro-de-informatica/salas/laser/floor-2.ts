import type { Room } from "../../../types";

export const rooms: Room[] = [
  {
    id: "laser-201",
    location: "LASER 201",
    type: "classroom",
    description: "Sala de aula LASER 201",
    capacity: 50,
  },
  {
    id: "laser-202",
    location: "LASER 202",
    type: "classroom",
    description: "Sala de aula LASER 202",
    capacity: 45,
  },
  {
    id: "laser-203",
    location: "LASER 203",
    type: "lab-class",
    description: "Laboratório de aula LASER 203",
    capacity: 25,
  },
  {
    id: "laser-office",
    location: "Escritório LASER",
    type: "institutional-office",
    description: "Escritório administrativo",
    department: "Departamento de Informática",
  },
  {
    id: "corredor-laser-2",
    location: "Corredor",
    type: "corridor",
    description: "Corredor do 2º andar",
  },
  {
    id: "laser-204",
    location: "LASER 204",
    type: "classroom",
    description: "Sala de aula LASER 204",
    capacity: 40,
  },
  {
    id: "laser-205",
    location: "LASER 205",
    type: "classroom",
    description: "Sala de aula LASER 205",
    capacity: 35,
  },
  {
    id: "laser-206",
    location: "LASER 206",
    type: "classroom",
    description: "Sala de aula LASER 206",
    capacity: 30,
  },
  {
    id: "banheiro-laser-2",
    location: "Banheiro",
    type: "bathroom",
    description: "Banheiro unisex",
    gender: "unisex",
  },
  {
    id: "escada-laser-2",
    location: "Escada",
    type: "stairs",
    description: "Escada de acesso",
  },
];
