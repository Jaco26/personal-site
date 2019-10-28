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
      case 2: // snake
        return {
          strokeStyle: 'limegreen',
          fillStyle: '#80a0f033',
        } 
      // case 3: // slime (stuff the snake has been on)
      //   return '#6c9e70'
      case 3: // food
        return '#eeeeee33'
    }
  }
}

