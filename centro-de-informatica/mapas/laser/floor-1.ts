import type { FloorLayout } from "../../../types";

export const floor1: FloorLayout = {
  id: "laser-1st-floor",
  name: "1º Andar",
  level: 1,
  blueprint: {
    width: 400,
    height: 300,
  },
  rooms: [
    {
      id: "laser-101",
      shapes: [{ position: { x: 0, y: 0 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "laser-102",
      shapes: [{ position: { x: 100, y: 0 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "laser-103",
      shapes: [{ position: { x: 200, y: 0 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "laser-lab",
      shapes: [{ position: { x: 300, y: 0 }, size: { width: 100, height: 150 } }],
    },
    {
      id: "corredor-laser-1",
      shapes: [
        { position: { x: 0, y: 80 }, size: { width: 300, height: 20 } },
        { position: { x: 0, y: 200 }, size: { width: 400, height: 20 } },
      ],
    },
    {
      id: "laser-104",
      shapes: [{ position: { x: 0, y: 220 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "laser-105",
      shapes: [{ position: { x: 100, y: 220 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "laser-106",
      shapes: [{ position: { x: 200, y: 220 }, size: { width: 100, height: 80 } }],
    },
    {
      id: "banheiro-laser-1",
      shapes: [{ position: { x: 300, y: 150 }, size: { width: 50, height: 50 } }],
    },
    {
      id: "escada-laser-1",
      shapes: [{ position: { x: 350, y: 150 }, size: { width: 50, height: 50 } }],
    },
  ],
};
