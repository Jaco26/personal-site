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
        return '#112'
      case 2: // active
        return 'limegreen'
      case 3: // food
        return '#eee'
    }
  }
}