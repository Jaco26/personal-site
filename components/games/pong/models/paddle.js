export default class Paddle {
  fillStyle = '#a29'
  strokeStyle = 'lime'
  x = 0
  y = 0
  width = 0
  height = 0
  dx = 0
  dy = 0
  isLeft = false

  updatePosition() {
    this.y += this.dy
  }
}