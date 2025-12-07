import type { FloorLayout } from "../../../types";

export const floor1: FloorLayout = {
  id: "laser-ground-floor",
  name: "Térreo",
  level: 0,
  blueprint: {
    width: 400,
    height: 400,
  },
  rooms: [
    {
      id: "corredor",
      shapes: [
        { position: { x: 0, y: 120 }, size: { width: 140, height: 180 } },
        { position: { x: 0, y: 300 }, size: { width: 40, height: 100 } },
        { position: { x: 140, y: 120 }, size: { width: 195, height: 50 } },
      ],
    },
    {
      id: "banheiro-feminino",
      shapes: [{ position: { x: 40, y: 300 }, size: { width: 50, height: 100 } }],
    },
    {
      id: "banheiro-masculino",
      shapes: [{ position: { x: 90, y: 300 }, size: { width: 50, height: 100 } }],
    },
    {
      id: "cebraspe",
      shapes: [{ position: { x: 140, y: 170 }, size: { width: 65, height: 230 } }],
    },
    {
      id: "tns",
      shapes: [{ position: { x: 205, y: 170 }, size: { width: 65, height: 230 } }],
    },
    {
      id: "syncro",
      shapes: [{ position: { x: 270, y: 170 }, size: { width: 65, height: 230 } }],
    },
    {
      id: "vsoft",
      shapes: [{ position: { x: 335, y: 120 }, size: { width: 65, height: 280 } }],
    },
  ],
};
