#!/usr/bin/env tsx
/**
 * Script to generate visual images of floor layouts
 *
 * Reads floor layout data and generates PNG images showing:
 * - Room shapes with borders
 * - Room IDs as labels
 * - Blueprint dimensions
 *
 * Usage:
 *   npm run generate-images        # Generate images (for CI)
 *   npm run generate-images:local  # Generate images with local paths
 */

import {
  createCanvas,
  type CanvasRenderingContext2D as NodeCanvasRenderingContext2D,
} from "canvas";
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { FloorLayout, RoomLayout } from "../types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Check if running locally (for different output paths)
const isLocal = process.argv.includes("--local");
const outputDir = isLocal ? join(rootDir, "generated-images") : join(rootDir, "images");

// Scale factor for image generation (higher = better quality, larger file)
const SCALE = 2;
const ROOM_COLOR = "#E3F2FD";
const ROOM_BORDER_COLOR = "#1976D2";
const TEXT_COLOR = "#0D47A1";
const BACKGROUND_COLOR = "#FAFAFA";

/**
 * Generate image for a single floor
 */
async function generateFloorImage(floor: FloorLayout, outputPath: string): Promise<void> {
  const { blueprint, rooms } = floor;
  const width = blueprint.width * SCALE;
  const height = blueprint.height * SCALE;

  // Create canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, width, height);

  // Draw rooms
  for (const room of rooms) {
    drawRoom(ctx, room, SCALE);
  }

  // Save image
  const buffer = canvas.toBuffer("image/png");
  await writeFile(outputPath, buffer);
  console.log(`✅ Generated: ${outputPath}`);
}

/**
 * Draw a single room with all its shapes
 */
function drawRoom(ctx: NodeCanvasRenderingContext2D, room: RoomLayout, scale: number): void {
  const { id, shapes } = room;

  // Draw all shapes for this room
  for (const shape of shapes) {
    const x = shape.position.x * scale;
    const y = shape.position.y * scale;
    const w = shape.size.width * scale;
    const h = shape.size.height * scale;

    // Draw room rectangle
    ctx.fillStyle = ROOM_COLOR;
    ctx.fillRect(x, y, w, h);

    // Draw border
    ctx.strokeStyle = ROOM_BORDER_COLOR;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
  }

  // Calculate center of all shapes for label placement
  let centerX = 0;
  let centerY = 0;
  let totalArea = 0;

  for (const shape of shapes) {
    const x = shape.position.x + shape.size.width / 2;
    const y = shape.position.y + shape.size.height / 2;
    const area = shape.size.width * shape.size.height;
    centerX += x * area;
    centerY += y * area;
    totalArea += area;
  }

  centerX = (centerX / totalArea) * scale;
  centerY = (centerY / totalArea) * scale;

  // Draw room ID label
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = `${12 * scale}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(id, centerX, centerY);
}

/**
 * Load floor layout from file
 */
async function loadFloorLayout(buildingId: string, floorFile: string): Promise<FloorLayout> {
  // Build import path - use file:// protocol for dynamic imports
  const floorPath = `file://${join(
    rootDir,
    "centro-de-informatica",
    "mapas",
    buildingId,
    floorFile
  )}`;

  // Dynamic import - tsx handles .ts files directly
  const floorModule = await import(floorPath);
  const floorKey = Object.keys(floorModule).find(
    key => key.startsWith("floor") || key === "default"
  );

  if (!floorKey) {
    throw new Error(
      `No floor export found in ${floorFile}. Available keys: ${Object.keys(floorModule).join(", ")}`
    );
  }

  return floorModule[floorKey] as FloorLayout;
}

/**
 * Get all floor files for a building
 */
function getFloorFiles(): string[] {
  // List of floor files (we know them, but could also read directory)
  return ["floor-subsolo.ts", "floor-terreo.ts", "floor-1.ts", "floor-2.ts", "floor-3.ts"];
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🎨 Generating floor layout images...\n");

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true });

  const buildingId = "building-1";
  const floorFiles = getFloorFiles();

  for (const floorFile of floorFiles) {
    try {
      const floor = await loadFloorLayout(buildingId, floorFile);
      const floorName = floorFile.replace(".ts", "").replace("floor-", "");
      const outputPath = join(outputDir, `${buildingId}-${floorName}.png`);

      await generateFloorImage(floor, outputPath);
    } catch (error) {
      console.error(`❌ Error processing ${floorFile}:`, error);
      process.exit(1);
    }
  }

  console.log(`\n✨ All images generated in: ${outputDir}`);
}

// Run main function
main().catch(error => {
  console.error("Fatal error:", error);
  process.exit(1);
});
