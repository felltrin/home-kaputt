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

const boxColor: r.Color = r.BROWN;
const boxPosition: r.Vector2 = { x: 50, y: 50 };

const screenWidth = 1280;
const screenHeight = 720;

r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  if (r.IsKeyDown(r.KEY_RIGHT)) {
    boxPosition.x += 10;
  }
  if (r.IsKeyDown(r.KEY_LEFT)) {
    boxPosition.x -= 10;
  }
  if (r.IsKeyDown(r.KEY_DOWN)) {
    boxPosition.y += 10;
  }
  if (r.IsKeyDown(r.KEY_UP)) {
    boxPosition.y -= 10;
  }

  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);
  r.DrawRectangle(boxPosition.x, boxPosition.y, 200, 200, boxColor);
  r.EndDrawing();
}
r.CloseWindow();
