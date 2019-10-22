export default class Snake {
  changeDirectionLock = false
  nSegmentsToPush = 0
  dx = 1
  dy = 0
  
  constructor({ row, col, isPolluter = false } = {}) {
    this.isPolluter = isPolluter
    this.col = col
    this.row = row
    this.body = [{ row, col }]

    this.bodyMap = {}
  }

  isSnake(rowIndex, colIndex) {
    return this.bodyMap[`${rowIndex},${colIndex}`]
  }

  setDirection(key) {
    const setDir = (dx, dy) => {
      // the snake cannot double back on itself
      if (this.dx !== -dx) this.dx = dx 
      if (this.dy !== -dy) this.dy = dy
      // lock in a direction being set until the next call to this.updateBody
      this.changeDirectionLock = true
    }

    const directionRouter = {
      arrowLeft: () => setDir(-1, 0),
      arrowUp: () => setDir(0, -1),
      arrowRight: () => setDir(1, 0),
      arrowDown: () => setDir(0, 1)
    }

    if (!this.changeDirectionLock && directionRouter[key]) {
      directionRouter[key]()
    }
  }

  updateBody() {
    this.bodyMap = {}
    if (this.nSegmentsToPush > 0) {
      // get a copy of the snake's current tail
      const { row, col } = this.body[this.body.length - 1]
      // register this position as being one that the snake occupies
      this.bodyMap[`${row},${col}`] = true
      // push it onto the snake
      this.body.push({ row, col })

      this.nSegmentsToPush -= 1
    } else if (!this.isPolluter) {
      for (let i = 0; i < this.body.length; i++) {
        // use the garbage collector to drop the current first item in the snakes
        // body and shift the rest of the elements toward the front of the body array
        const { row, col } = this.body[i + 1]
        this.body[i] = { row, col }
        // register each new body position
        this.bodyMap[`${row},${col}`] = true
      }
    }
    
    // calculate the coordinates of the new tail
    this.col += this.dx
    this.row += this.dy
    // register the new tail position
    this.bodyMap[`${this.row},${this.col}`] = true

    this.body.push({ col: this.col, row: this.row })
    this.changeDirectionLock = false
  }
}