export default class Painter {
  bgColor = '#abcd'
  
  constructor({ ctx, width, height }) {
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx
    this.width = width
    this.height = height
  }

  _draw(config, callback) {
    this.ctx.beginPath()
    this.ctx.fillStyle = config.fillStyle
    this.ctx.strokeStyle = config.strokeStyle
    callback()
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.closePath()
  }

  arc(config) { 
    this._draw(config, () => {
      this.ctx.arc(config.x, config.y, config.r, 0, Math.PI * 2)
    })
  }

  rect(config) {
    this._draw(config, () => {
      this.ctx.rect(config.x, config.y, config.width, config.height)
    })
  }

  text(config) {
    this.ctx.beginPath()
    this.ctx.fillStyle = config.fillStyle || 'red'
    this.ctx.font =  config.font || '30px Arial'
    this.ctx.fillText(
      config.text || '',
      config.x || this.ctx.canvas.width / 2 - 30,
      config.y || 60
    )
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = this.bgColor
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  
}