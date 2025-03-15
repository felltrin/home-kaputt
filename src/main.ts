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

// scene constants
class Projectile {
  radius: number;
  speed: number;
  pos: r.Vector2;
  active = true;

  constructor(pos: r.Vector2) {
    this.radius = 4;
    this.speed = -8;
    this.pos = pos;
  }

  update() {
    this.pos.x -= this.speed;
    if (this.active) {
      if (this.pos.x > 1280 || this.pos.x < 0) {
        this.active = false;
      }
    }
  }

  draw() {
    r.DrawCircle(this.pos.x, this.pos.y, this.radius, r.GREEN);
  }
}

class House {
  position: r.Vector3;
  hp: number;
  color: r.Color;
  projectiles: Array<Projectile>;
  ready: boolean = true;
  hpOutlineRect: r.Rectangle;
  hpOutlineRoundness: number;
  hpOutlineSegments: number;
  hpOutlineLineThick: number;
  // hpOutlineColor: r.Color;

  constructor(newX: number) {
    this.position = { x: newX, y: 550, z: 150 };
    this.hp = 100;
    this.color = { r: 0, g: 0, b: 128, a: 255 };
    this.projectiles = new Array();
    this.hpOutlineRect = {
      x: this.position.x - 25,
      y: this.position.y - 200,
      width: 200,
      height: 20,
    };
    this.hpOutlineRoundness = 5;
    this.hpOutlineSegments = 10;
    this.hpOutlineLineThick = 4;
    // this.hpOutlineColor = r.BLACK;
  }

  fireProjectiles() {
    let pos: r.Vector2;
    if (this.position.x < 500) {
      pos = {
        x: this.position.x + this.position.z / 2,
        y: this.position.y,
      };
    } else {
      pos = {
        x: this.position.x - this.position.z / 2,
        y: this.position.y,
      };
    }

    this.projectiles.push(new Projectile(pos));
  }

  draw() {
    // house body
    r.DrawRectangle(
      this.position.x,
      this.position.y,
      this.position.z,
      this.position.z,
      this.color
    );

    // house roof
    r.DrawTriangle(
      { x: this.position.x + 75, y: this.position.y - 125 },
      { x: this.position.x - 50, y: this.position.y },
      { x: this.position.x + this.position.z + 50, y: this.position.y },
      this.color
    );

    // hp bar outline
    r.DrawRectangleRoundedLines(
      this.hpOutlineRect,
      this.hpOutlineRoundness,
      this.hpOutlineSegments,
      this.hpOutlineLineThick,
      r.BLACK
    );
  }
}

const removeInactiveProjectiles = (projectiles: Array<Projectile>) => {
  for (let projectile of projectiles) {
    if (projectile.active === false) {
      const index = projectiles.indexOf(projectile);
      if (index > -1) {
        projectiles.splice(index, 1);
      }
    }
  }
};

const houseOne: House = new House(200);
const houseTwo: House = new House(900);
const ground: r.Vector3 = { x: 0, y: 700, z: 1300 };

const screenWidth = 1280;
const screenHeight = 720;

r.InitWindow(screenWidth, screenHeight, "home feud");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  if (r.IsKeyPressed(r.KEY_SPACE)) {
    houseOne.fireProjectiles();
  }

  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);

  removeInactiveProjectiles(houseOne.projectiles);
  for (let projectile of houseOne.projectiles) {
    projectile.update();
    projectile.draw();
  }

  // scene drawing
  houseOne.draw();
  houseTwo.draw();
  r.DrawRectangle(ground.x, ground.y, ground.z, ground.z, r.BROWN);

  r.EndDrawing();
}
r.CloseWindow();
