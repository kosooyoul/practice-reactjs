const makeCharaSet = (x, y, sw, sh) => {
  const charaSet = { left: [], right: [], up: [], down: [] };
  charaSet.up.push({ x: 0 * sw + 24 * 12, y: 0 * sh, width: sw, height: sh });
  charaSet.up.push({ x: 1 * sw + 24 * 12, y: 0 * sh, width: sw, height: sh });
  charaSet.up.push({ x: 2 * sw + 24 * 12, y: 0 * sh, width: sw, height: sh });
  charaSet.up.push({ x: 1 * sw + 24 * 12, y: 0 * sh, width: sw, height: sh });
  charaSet.right.push({ x: 0 * sw + 24 * 12, y: 1 * sh, width: sw, height: sh });
  charaSet.right.push({ x: 1 * sw + 24 * 12, y: 1 * sh, width: sw, height: sh });
  charaSet.right.push({ x: 2 * sw + 24 * 12, y: 1 * sh, width: sw, height: sh });
  charaSet.right.push({ x: 1 * sw + 24 * 12, y: 1 * sh, width: sw, height: sh });
  charaSet.down.push({ x: 0 * sw + 24 * 12, y: 2 * sh, width: sw, height: sh });
  charaSet.down.push({ x: 1 * sw + 24 * 12, y: 2 * sh, width: sw, height: sh });
  charaSet.down.push({ x: 2 * sw + 24 * 12, y: 2 * sh, width: sw, height: sh });
  charaSet.down.push({ x: 1 * sw + 24 * 12, y: 2 * sh, width: sw, height: sh });
  charaSet.left.push({ x: 0 * sw + 24 * 12, y: 3 * sh, width: sw, height: sh });
  charaSet.left.push({ x: 1 * sw + 24 * 12, y: 3 * sh, width: sw, height: sh });
  charaSet.left.push({ x: 2 * sw + 24 * 12, y: 3 * sh, width: sw, height: sh });
  charaSet.left.push({ x: 1 * sw + 24 * 12, y: 3 * sh, width: sw, height: sh });
  return [charaSet];
}

const CHARA_SET_IMAGE_URL = 'http://localhost:3000/assets/chara.png';
const CHARA_SIZE_WIDTH = 24;
const CHARA_SIZE_HEIGHT = 32;
const CHARA_SET = makeCharaSet(0, 0, CHARA_SIZE_WIDTH, CHARA_SIZE_HEIGHT);

export default class CharaSet {
  context;

  constructor(context) {
    this.context = context;
    this.charaSetImage = new Image();
    this.charaSetImage.src = CHARA_SET_IMAGE_URL;
  }

  drawChara(charaIndex, direction, step, x, y, w, h) {
    const chara = CHARA_SET[charaIndex][direction][step % 4];
    this.context.drawImage(this.charaSetImage, chara.x, chara.y, chara.width, chara.height, x, y, w, h);
  }
  
  destroy() {
    // Do nothing
  }
}
