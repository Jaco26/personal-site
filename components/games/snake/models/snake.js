export default class Snake {
  willChangeDirection = false
  
  constructor({ startPos } = {}) {
    this.body = [startPos]

  }
}