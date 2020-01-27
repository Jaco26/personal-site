export default class Snake {
  changeDirectionLock = false
  nSegmentsToPush = 0
  dx = 1
  dy = 0

  prevHeadPosition = null

  didCollideWithSelf = false

  constructor({ initPosition, gameMode } = {}) {
    this.gameMode = gameMode
    this.headPosition = initPosition
    this.body = [initPosition]

    this.bodyMap = {}
    this.bodyMap[initPosition] = true

    this.history= {}

  }

  isSnake(position) {
    return this.bodyMap[position]
  }

  setDirection(key) {
    const setDir = (dx, dy) => {
      // the snake cannot double back on itself
      if (this.dx !== -dx) this.dx = dx
      if (this.dy !== -dy) this.dy = dy
      // direction can only be set once per game-loop iteration.
      // allowing multiple direction changes can result in the 
      // snake doubling back on itself because...idk y...I'll figure it out later
      this.changeDirectionLock = true
    }

    const dirRouter = {
      arrowLeft: () => setDir(-1, 0),
      arrowUp: () => setDir(0, -1),
      arrowRight: () => setDir(1, 0),
      arrowDown: () => setDir(0, 1)
    }

    if (!this.changeDirectionLock && dirRouter[key]) {
      dirRouter[key]()
    }
  }



  updateBody(rowLength, trackHistory) {
    this.bodyMap = {}

    if (trackHistory) {
      this.history[this.headPosition] = true
    }
  
    if (this.nSegmentsToPush > 0) {
      this.body.push(null) // the value pushed onto the body will be reassigned below to the new headPosition
      this.nSegmentsToPush -= 1
    } else if (this.gameMode === 'classic') {
      for (let i = 0; i < this.body.length - 1; i++) {
        // move each value in this.body toward the head by one index
        const position = this.body[i + 1]
        this.body[i] = position
      }
    }
    this.prevHeadPosition = this.headPosition
    this.headPosition += this.dx
    this.headPosition += this.dy * rowLength

    this.body[this.body.length - 1] = this.headPosition

    this.body.forEach(position => {
      if (this.bodyMap[position]) {
        this.didCollideWithSelf = true
      }
      this.bodyMap[position] = true
    })
    this.changeDirectionLock = false
  }
}