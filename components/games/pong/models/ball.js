export default class Ball {
  fillStyle = '#17b'
  strokeStyle = '#333'
  x = 0
  y = 0
  r = 0
  dx = 0
  dy = 0

  updatePosition() {
    this.x += this.dx
    this.y += this.dy
  }
}