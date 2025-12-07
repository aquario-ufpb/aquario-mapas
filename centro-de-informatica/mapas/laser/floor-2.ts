import type { FloorLayout } from "../../../types";

export const floor2: FloorLayout = {
  id: "laser-1st-floor",
  name: "1º Andar",
  level: 1,
  blueprint: {
    width: 400,
    height: 400,
  },
  rooms: [
    {
      id: "corredor",
      shapes: [
        { position: { x: 0, y: 300 }, size: { width: 40, height: 100 } },
        { position: { x: 140, y: 120 }, size: { width: 260, height: 50 } },
        { position: { x: 40, y: 300 }, size: { width: 50, height: 100 } },
      ],
    },
    {
      id: "area-lazer",
      shapes: [{ position: { x: 0, y: 120 }, size: { width: 140, height: 180 } }],
    },
    {
      id: "sala-copa",
      shapes: [{ position: { x: 90, y: 300 }, size: { width: 50, height: 100 } }],
    },
    {
      id: "sala-espera",
      shapes: [{ position: { x: 140, y: 170 }, size: { width: 65, height: 115 } }],
    },
    {
      id: "sala-reuniao",
      shapes: [{ position: { x: 140, y: 285 }, size: { width: 65, height: 115 } }],
    },
    {
      id: "sala-log",
      shapes: [{ position: { x: 205, y: 170 }, size: { width: 65, height: 230 } }],
    },
    {
      id: "sala-robotica",
      shapes: [{ position: { x: 270, y: 170 }, size: { width: 65, height: 230 } }],
    },
    {
      id: "sala-embarcados",
      shapes: [{ position: { x: 335, y: 170 }, size: { width: 65, height: 230 } }],
    },
  ],
};
