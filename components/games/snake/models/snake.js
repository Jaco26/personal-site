export default class Snake {
  changeDirectionLock = false
  nSegmentsToPush = 0
  dx = 1
  dy = 0

  didCollideWithSelf = false
  
  constructor({ row, col, gameMode } = {}) {
    this.gameMode = gameMode
    this.headCol = col
    this.headRow = row
    this.body = [{ row, col }]

    this.bodyMap = {}
    this.bodyMap[`${row},${col}`] = true
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
      // this only has a noticiable effect when the snake is moving slowly
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
    console.log(this.gameMode)

    if (this.nSegmentsToPush > 0) {
      const { row, col } = this.body[this.body.length - 1]
      this.body.push({ row, col }) // this is the new head of the snake
      this.nSegmentsToPush -= 1
    } else if (this.gameMode === 'classic') {
      for (let i = 0; i < this.body.length - 1; i++) {
        const { row, col } = this.body[i + 1]
        this.body[i] = { row, col }
      }
    }
    this.headCol += this.dx
    this.headRow += this.dy    
    
    // set the headCol and headRow as the new head of the snake body
    this.body[this.body.length - 1] = { col: this.headCol, row: this.headRow }

    this.body.forEach(({ row, col }) => {
      if (this.bodyMap[`${row},${col}`]) {
        this.didCollideWithSelf = true
      }
      this.bodyMap[`${row},${col}`] = true
    })
  
    this.changeDirectionLock = false
  }
}