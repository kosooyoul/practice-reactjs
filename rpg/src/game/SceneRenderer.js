import TileSet from "./TileSet";
import CharaSet from "./CharaSet";

export default class SceneRenderer {
  context;
  tileSet;
  charaSet;

  keyStatus = {};
  
  frameCount = 0;
  lastDirection = 'down';
  movable = true;
  moving = false;
  playerX = 0;
  playerY = 0;
  playerOffsetX = 0;
  playerOffsetY = 0;

  constructor(context) {
    this.context = context;
    this.tileSet = new TileSet(context);
    this.charaSet = new CharaSet(context);
  }

  render(width, height) {
    this.frameCount++;
    this.context.clearRect(0, 0, width, height);
    this.context.fillStyle = '#000000';
    this.context.beginPath();
    const radius = 10 + 10 * Math.abs(Math.sin(this.frameCount * 0.05));
    this.context.arc(150, 150, radius, 0, 2 * Math.PI);
    this.context.fill();

    this.drawMap();
    this.drawChara();
  }

  drawMap() {
    for(var j = 0; j < 20; j++) {
      for(var i = 0; i < 30; i++) {
        this.tileSet.drawTile(20, i * 32, j * 32, 32);
      }
    }
  }

  drawChara() {
    this._updateDirection();

    if (this.movable) {
      if (this.moving) {
        this.movable = false;
        if (this.lastDirection == 'left') {
          this.playerX--;
          this.playerOffsetX = 32;
        } else if (this.lastDirection == 'right') {
          this.playerX++;
          this.playerOffsetX = -32;
        } else if (this.lastDirection == 'up') {
          this.playerY--;
          this.playerOffsetY = 32;
        } else if (this.lastDirection == 'down') {
          this.playerY++;
          this.playerOffsetY = -32;
        }
      }
    }

    if (this.playerOffsetX > 0) this.playerOffsetX-=2;
    else if (this.playerOffsetX < 0) this.playerOffsetX+=2;
    else if (this.playerOffsetY > 0) this.playerOffsetY-=2;
    else if (this.playerOffsetY < 0) this.playerOffsetY+=2;

    if (this.playerOffsetX == 0 && this.playerOffsetY == 0) {
      this.movable = true;
    }

    if (this.moving) {
      this.charaSet.drawChara(0, this.lastDirection, parseInt(this.frameCount / 10),
        this.playerX * 32 - 8 + this.playerOffsetX,
        this.playerY * 32 + this.playerOffsetY,
        48, 64
      );
    } else {
      this.charaSet.drawChara(0, this.lastDirection, 1,
        this.playerX * 32 - 8 + this.playerOffsetX,
        this.playerY * 32 + this.playerOffsetY,
        48, 64
      );
    }
  }

  destroy() {
    // Do nothing
  }

  handleKeyDown(keyCode, status) {
    this.keyStatus = status;
    console.log(keyCode, status);
  }

  handleKeyUp(keyCode, status) {
    this.keyStatus = status;
    console.log(keyCode, status);
  }

  _updateDirection() {
    if (this.movable == false) {
      return;
    }

    if (this.keyStatus[38]) {
      this.lastDirection = 'up';
      this.moving = true;
    } else if (this.keyStatus[39]) {
      this.lastDirection = 'right';
      this.moving = true;
    } else if (this.keyStatus[40]) {
      this.lastDirection = 'down';
      this.moving = true;
    } else if (this.keyStatus[37]) {
      this.lastDirection = 'left';
      this.moving = true;
    } else {
      this.moving = false;
    }
  }
}
