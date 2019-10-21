export default class Painter {
  constructor(ctx) {
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx;
  }
  paintCell(cell) {
    this.ctx.beginPath();
    this.ctx.rect(cell.x, cell.y, cell.width, cell.height);
    this.ctx.fillStyle = cell.color
    this.ctx.fill();
    this.ctx.closePath();
  }
}