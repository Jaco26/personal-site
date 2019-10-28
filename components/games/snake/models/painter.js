export default class Painter {
  constructor(ctx) {
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx;
  }
  paintCell(cell) {
    this.ctx.beginPath();
    this.ctx.rect(cell.x, cell.y, cell.width, cell.height);
    if (typeof cell.color === 'string') {
      this.ctx.fillStyle = cell.color
      this.ctx.fill()
    } else {
      this.ctx.fillStyle = cell.color.fillStyle
      this.ctx.strokeStyle = cell.color.strokeStyle
      this.ctx.stroke()
      this.ctx.fill()
    }
    this.ctx.closePath();
  }
}