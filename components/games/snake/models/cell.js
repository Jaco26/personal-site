export default class Cell {
  kind = 1

  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get color() {
    switch (this.kind) {
      case 1: // default
        return '#abcd'
      case 2: // snake
        return {
          strokeStyle: 'lime',
          fillStyle: '#a29'
        }
      case 3: // food
        return {
          fillStyle: '#17b',
          strokeStyle: '#333',
        }
      case 4: // game over!
        return {
          fillStyle: '#f11',
          strokeStyle: '#fa5'
        }
      
    }
  }
}

