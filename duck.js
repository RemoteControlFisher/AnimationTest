class duck {
  constructor(game, state, x, y) {
    this.game = game
    this.x = x,
      this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = state // stand, jump, walk, holdstand, holdwalk, squat, slide are considered valid options.

    this.animators = [];
    this.armAnimators = [];

    this.animators[0] = new animator(this.spritesheet, // Spritesheet
      41, //X
      14, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.12, //Time
      16, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators[0] = new animator(this.spritesheet,
      2,
      519,
      12,
      16,
      6,
      0.10,
      4,
      false,
      true,
      null)

    this.animators[1] = new animator(this.spritesheet, // Spritesheet
      40, //X
      46, //Y
      20, //Width
      26, //Height
      4, //Frames
      0.30, //Time
      12, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators[1] = new animator(this.spritesheet,
      2,
      532,
      12,
      16,
      5,
      0.24,
      4,
      false,
      true,
      null)
    this.animators[2]  = new animator(this.spritesheet, // Spritesheet
      41, //X
      14, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.12, //Time
      16, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators[2] = new animator(this.spritesheet,
      68,
      472,
      15,
      12,
      1,
      0.10,
      8,
      false,
      true,
      null)

  }

  update() {

  }

  draw(ctx) {
    switch (this.state) {
      case "walk":
        this.animators[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
        this.armAnimators[0].drawFrame(this.game.clockTick, ctx, this.x - 1, this.y + 16, 2)
        break;
      case "jump":
        this.animators[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
        //this.armAnimators[1].drawFrame(this.game.clockTick, ctx, this.x, this.y + 12, 2)
        break;
      case "holdwalk":
        this.animators[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
        //this.armAnimators[2].drawFrame(this.game.clockTick, ctx, this.x + 16, this.y + 14, 2)
        break;
    }


  }
}

class duckArm {
  constructor(game, duck) {
    Object.assign(game, duck)
    this.spritesheet = ASSET_MANAGER.getAsset(".sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = "stand" // stand, jump, squat, slide are considered valid options.
    this.animator = new animator()
  }

  update() {

  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
  }
}

