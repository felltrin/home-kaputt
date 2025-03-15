/*******************************************************************************************
 *
 *   raylib - Simple Game template
 *
 *   Home Feud
 *   What if you didn't have restraint on your neighbor?
 *
 *   This game has been created using raylib (www.raylib.com)
 *   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
 *
 *   Copyright (c) 2014-2018 Ramon Santamaria (@raysan5)
 *
 ********************************************************************************************/

import r from "raylib";

const screenWidth = 1280;
const screenHeight = 720;

// scene constants
const houseY: number = 550;
const playerOneHouseSpec: r.Vector3 = { x: 200, y: houseY, z: 150 };
const playerTwoHouseSpec: r.Vector3 = { x: 900, y: houseY, z: 150 };
const ground: r.Vector3 = { x: 0, y: 700, z: 1300 };
const houseColor: r.Color = { r: 0, g: 0, b: 128, a: 255 };

const constructHouse = (playerSpec: r.Vector3, color: r.Color) => {
  r.DrawRectangle(
    playerSpec.x,
    playerSpec.y,
    playerSpec.z,
    playerSpec.z,
    color
  );
  r.DrawTriangle(
    { x: playerSpec.x + 75, y: houseY - 125 },
    { x: playerSpec.x - 50, y: houseY },
    { x: playerSpec.x + playerSpec.z + 50, y: houseY },
    color
  );
};

r.InitWindow(screenWidth, screenHeight, "home feud");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  // if (r.IsKeyDown(r.KEY_RIGHT)) {
  //   boxPosition.x += 10;
  // }
  // if (r.IsKeyDown(r.KEY_LEFT)) {
  //   boxPosition.x -= 10;
  // }
  // if (r.IsKeyDown(r.KEY_DOWN)) {
  //   boxPosition.y += 10;
  // }
  // if (r.IsKeyDown(r.KEY_UP)) {
  //   boxPosition.y -= 10;
  // }
  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);

  // scene drawing
  constructHouse(playerOneHouseSpec, houseColor);
  constructHouse(playerTwoHouseSpec, houseColor);
  r.DrawRectangle(ground.x, ground.y, ground.z, ground.z, r.BROWN);

  r.EndDrawing();
}
r.CloseWindow();
