export default class SceneRenderer {
  frameCount;

  constructor() {
    this.frameCount = 0;
  }

  render(context, width, height) {
    this.frameCount++;
    context.clearRect(0, 0, width, height);
    context.fillStyle = '#000000';
    context.beginPath();
    const radius = 10 + 10 * Math.abs(Math.sin(this.frameCount * 0.05));
    context.arc(150, 150, radius, 0, 2 * Math.PI);
    context.fill();
  }

  destroy() {
    // Do nothing
  }
}
