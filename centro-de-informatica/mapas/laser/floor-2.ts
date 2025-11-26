import type { FloorLayout } from "../../../types";

export const floor2: FloorLayout = {
  id: "laser-2nd-floor",
  name: "2º Andar",
  level: 2,
  blueprint: {
    width: 400,
    height: 300,
  },
  rooms: [
    {
      id: "laser-201",
      shapes: [{ position: { x: 0, y: 0 }, size: { width: 120, height: 100 } }],
    },
    {
      id: "laser-202",
      shapes: [{ position: { x: 120, y: 0 }, size: { width: 120, height: 100 } }],
    },
    {
      id: "laser-203",
      shapes: [{ position: { x: 240, y: 0 }, size: { width: 80, height: 100 } }],
    },
    {
      id: "laser-office",
      shapes: [{ position: { x: 320, y: 0 }, size: { width: 80, height: 100 } }],
    },
    {
      id: "corredor-laser-2",
      shapes: [
        { position: { x: 0, y: 100 }, size: { width: 400, height: 20 } },
        { position: { x: 0, y: 220 }, size: { width: 400, height: 20 } },
      ],
    },
    {
      id: "laser-204",
      shapes: [{ position: { x: 0, y: 240 }, size: { width: 100, height: 60 } }],
    },
    {
      id: "laser-205",
      shapes: [{ position: { x: 100, y: 240 }, size: { width: 100, height: 60 } }],
    },
    {
      id: "laser-206",
      shapes: [{ position: { x: 200, y: 240 }, size: { width: 100, height: 60 } }],
    },
    {
      id: "banheiro-laser-2",
      shapes: [{ position: { x: 300, y: 100 }, size: { width: 50, height: 50 } }],
    },
    {
      id: "escada-laser-2",
      shapes: [{ position: { x: 350, y: 100 }, size: { width: 50, height: 50 } }],
    },
  ],
};
