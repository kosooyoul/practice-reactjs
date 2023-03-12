import TileSet from "./TileSet";
import CharaSet from "./CharaSet";
import { sampleMapBaseLayer, sampleMapPropLayer, sampleMapOverLayer } from "./SampleMapData";

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
    this._updateDirection();

    const playerX = this.playerX;
    const playerY = this.playerY;

    const sight = 8;
    const minX = Math.max(0, playerX - sight);
    const maxX = playerX + sight;
    const minY = Math.max(0, playerY - sight + 1);
    const maxY = playerY + sight + 1;

    this.drawMap(sampleMapBaseLayer, 0, minX, maxX, minY, maxY);
    
    this.drawMap(sampleMapPropLayer, 250, minX, maxX, minY, maxY);

    this.drawChara();

    this.drawMap(sampleMapOverLayer, 250, minX, maxX, minY, maxY);
  }

  drawMap(layer, offset, sx, ex, sy, ey) {
    for(var j = sy; j <= ey; j++) {
      for(var i = sx; i <= ex; i++) {
        if (layer[j][i]) {
          this.tileSet.drawTile(layer[j][i] + offset, i * 32, j * 32, 32);
        }
      }
    }
  }

  drawChara() {
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
