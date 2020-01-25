export default class Painter {
  constructor(ctx) {
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx;
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
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

  paintText({ text, font, fillStyle, x, y }) {
    this.ctx.fillStyle = fillStyle
    this.ctx.font = font
    this.ctx.fillText(text, x, y)
  }
}