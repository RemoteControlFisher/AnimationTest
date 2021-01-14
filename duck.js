class duck {
  constructor(game, x, y) {
    this.game = game
    this.x = x,
    this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = "stand" // stand, jump, walk, squat, slide are considered valid options.
    this.animator = new animator(this.spritesheet, // Spritesheet
      41, //X
      14, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.08, //Time
      16, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    //this.arm = new duckArm(game, this, x, y)
  }

  update() {

  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
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

