import type { Room } from "../../../types";

export const rooms: Room[] = [
  {
    id: "corredor",
    location: "Corredor",
    type: "corridor",
    description: "Corredor",
  },
  {
    id: "area-lazer",
    location: "Área de Lazer",
    type: "shared-space",
    description: "Área de Lazer",
  },
  {
    id: "sala-copa",
    location: "Copa",
    type: "shared-space",
    description: "Copa",
  },
  {
    id: "sala-espera",
    location: "Sala de Espera",
    type: "shared-space",
    description: "Sala de Espera",
  },
  {
    id: "sala-reuniao",
    location: "Sala de Reunião",
    type: "shared-space",
    description: "Sala de Reunião",
  },
  {
    id: "sala-log",
    location: "LOG",
    type: "lab-research",
    description: "Log",
    labs: ["log"],
  },
  {
    id: "sala-robotica",
    location: "Laboratório de Robótica",
    type: "lab-research",
    description: "Laboratório de Robótica",
    labs: ["robotica"],
  },
  {
    id: "sala-embarcados",
    location: "Laboratório de Embarcados",
    type: "lab-research",
    description: "Laboratório de Embarcados",
    labs: ["embarcados"],
  },
];
