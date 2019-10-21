
class Cell {
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
        return '#333'
      case 2: // active
        return 'green'
      case 3: // food
        return '#eee'
    }
  }
}

function createCells(nRows, nCols, width, height) {
  const accum = [];
  const cellWidth = Math.floor(width / nCols)
  const cellHeigt = Math.floor(height / nRows)
  for (let row = 0; row < nRows; row++) {
    const cellY = cellHeigt * row;
    for (let col = 0; col < nCols; col++) {
      accum.push(new Cell({
        x: cellWidth * col,
        y: cellY,
        width: cellWidth,
        height: cellHeigt
      }))
    }
  }
  return accum;
}

class CellMap {
  constructor({ nRows, nCols, width, height }) {
    this.cells = createCells(nRows, nCols, width, height)
  }
  _setCellKind(idx, kind) {
    this.cells[idx].kind = kind;
  }
  snakeify(idx) {
    this._setCellKind(idx, 2)
  }
  normalify(idx) {
    this._setCellKind(idx, 1)
  }
  foodify(idx) {
    this._setCellKind(idx, 3)
  }
}


class Painter {
  constructor(ctx) {
    this.ctx = ctx;
  }
  paintCell(cell) {
    this.ctx.beginPath();
    this.ctx.rect(cell.x, cell.y, cell.width, cell.height);
    this.ctx.fillStyle = cell.color
    this.ctx.fill();
    this.ctx.closePath();
  }
}


export default {
  painter: null,
  cellMap: null,

  animationFrameHandle: null,

  listeners: {},

  on(event, listener) {
    if (this.listeners[event]) {
      this.off(event)
    }
    this.listeners[event] = listener
  },

  off(event) {
    this.listeners[event] = null
  },

  emit(event, payload) {
    this.listeners[event](payload)
  },

  rate: 6,
  gameOn: false,
  gameOver: false,

  head: 200,

  setup(options) {
    this.cellMap = new CellMap(options);
    this.painter = new Painter(options.ctx)
  },
  run() {
    let _rateCount = this.rate
    const mainLoop = () => {
      _rateCount -= 1
      if (_rateCount === 0) {
        this.cellMap.cells.forEach(cell => {
          this.painter.paintCell(cell);
        })
        if (this.gameOn) {
          this.cellMap.normalify(this.head)
          this.head += 1
          this.cellMap.snakeify(this.head)
         
          
        } else if (this.gameOver) {
          cancelAnimationFrame(this.animationFrameHandle)
        }
        _rateCount = this.rate
      }
      this.animationFrameHandle = requestAnimationFrame(mainLoop)

    }
    mainLoop()
  },

}
