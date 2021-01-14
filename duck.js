class duck {
  constructor(game, x, y) {
    Object.assign(game, x, y)
    this.spritesheet = ASSET_MANAGER.getAsset(".sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = "stand" // stand, jump, squat, slide are considered valid options.
    this.animator = new animator(this.spritesheet, 42, 14, 15, 25, 5, 0.15, 17, false, true, null) //No idle animation because I am looping.
    this.arm = new duckArm(game, this, x, y)
  }

  update() {

  }

  draw() {

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

  draw() {

  }
}

