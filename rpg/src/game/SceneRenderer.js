import TileSet from "./TileSet";
import CharaSet from "./CharaSet";

export default class SceneRenderer {
  context;
  tileSet;
  charaSet;
  frameCount;

  constructor(context) {
    this.context = context;
    this.tileSet = new TileSet(context);
    this.charaSet = new CharaSet(context);
    this.frameCount = 0;
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
    this.charaSet.drawChara(0, 'down', parseInt(this.frameCount / 10), 32 - 8, 32, 48, 64);
  }

  destroy() {
    // Do nothing
  }
}
