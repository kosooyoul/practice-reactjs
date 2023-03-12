const makeTileSet = (x, y, w, h, s) => {
  const tileSet = [];
  for (var j = y; j < h; j++) {
      for (var i = x; i < w; i++) {
      tileSet.push({ x: i * s, y: j * s, size: s });
    }
  }
  return tileSet;
}

const TILE_SET_IMAGE_URL = 'http://localhost:3000/assets/mapchip.png';
const TILE_SIZE = 16;
const TILE_SET = [
  ... makeTileSet(0, 0, 10, 25, TILE_SIZE),
  ... makeTileSet(10, 0, 20, 25, TILE_SIZE)
];

export default class TileSet {
  context;

  constructor(context) {
    this.context = context;
    this.tileSetImage = new Image();
    this.tileSetImage.src = TILE_SET_IMAGE_URL;
  }

  drawTile(tileIndex, x, y, size) {
    const tile = TILE_SET[tileIndex];
    this.context.drawImage(this.tileSetImage, tile.x, tile.y, tile.size, tile.size, x, y, size, size);
  }
  
  destroy() {
    // Do nothing
  }
}
