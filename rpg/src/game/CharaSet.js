const makeCharaSet = (x, y, step, sw, sh) => {
  const charaSet = { left: [], right: [], up: [], down: [] };
  for (var i = 0; i < step; i++) {
    charaSet.up.push({ x: i * sw, y: 0 * sh, width: sw, height: sh });
  }
  for (var i = 0; i < step; i++) {
    charaSet.right.push({ x: i * sw, y: 1 * sh, width: sw, height: sh });
  }
  for (var i = 0; i < step; i++) {
    charaSet.down.push({ x: i * sw, y: 2 * sh, width: sw, height: sh });
  }
  for (var i = 0; i < step; i++) {
    charaSet.left.push({ x: i * sw, y: 3 * sh, width: sw, height: sh });
  }
  return [charaSet];
}

const CHARA_SET_IMAGE_URL = 'http://localhost:3000/assets/chara.bmp';
const CHARA_SIZE_WIDTH = 24;
const CHARA_SIZE_HEIGHT = 32;
const CHARA_SET = makeCharaSet(0, 0, 4, CHARA_SIZE_WIDTH, CHARA_SIZE_HEIGHT);

export default class CharaSet {
  context;

  constructor(context) {
    this.context = context;
    this.charaSetImage = new Image();
    this.charaSetImage.src = CHARA_SET_IMAGE_URL;
  }

  drawChara(charaIndex, direction, step, x, y, w, h) {
    const chara = CHARA_SET[charaIndex][direction][step % 4];
    console.log(chara)
    this.context.drawImage(this.charaSetImage, chara.x, chara.y, chara.width, chara.height, x, y, w, h);
  }
  
  destroy() {
    // Do nothing
  }
}
