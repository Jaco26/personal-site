import GameBase from '@/components/games/game-base'
import CellMap from './cell-map'
import Painter from './painter'
import Snake from './snake'

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * @typedef SnakeArgs
 * @property {Number} row
 * @property {Number} col
 * @property {Boolean} isPolluter
 */

/**
 * @typedef Dimensions
 * @property {Number} nRows
 * @property {Number} nCols
 * @property {Number} width
 * @property {Number} height
 */

/**
 * @typedef SetupOptions
 * @property {CanvasRenderingContext2D} ctx
 * @property {SnakeArgs} snake
 * @property {Dimensions} dimensions
 * @property {Number} animationRate
 */

export default class Game extends GameBase {

  score = 0

  food = {
    row: null,
    col: null,
  }

  width = 0
  height = 0
  nRows = null
  nCols = null

  /** @type {Snake} */
  snake = null
  /** @type {CellMap} */
  cellMap = null
  /** @type {Painter} */
  painter = null

   /** @param {SetupOptions} options */
  setup({ ctx, animationRate, dimensions, initPosition, gameMode, paintScore }) {
    this.score = 0
    this.width = dimensions.width
    this.height = dimensions.height
    this.nRows = dimensions.nRows
    this.nCols = dimensions.nCols
    this.cellMap = new CellMap(dimensions);
    this.painter = new Painter(ctx);
    this.snake = new Snake({ ...initPosition, gameMode });
    this.animationRate = animationRate
    this.generateFood()
    this.paintCells()
    if (paintScore) {
      this.paintScore()
    }
  }

  resize(width, height, nRows, nCols) {
    this.width = width
    this.height = height
    this.nRows = nRows
    this.nCols = nCols
    this.cellMap = new CellMap({ nRows, nCols, width, height })
    this.paintCells()
  }

  getCellKind(row, col) {
    if (this.snake.bodyMap[`${row},${col}`]) {
      return 2
    } else if (this.food.row === row && this.food.col === col) {
      return 3
    }
    return 1
  }

  paintCells() {
    this.painter.ctx.clearRect(0, 0, this.painter.ctx.canvas.width, this.painter.ctx.canvas.height)
    this.cellMap.cells.forEach((row, ri) => {
      row.forEach((cell, ci) => {
        cell.kind = this.getCellKind(ri, ci);
        this.painter.paintCell(cell)
      })
    });
  }

  generateFood() {
    const col = randRange(0, this.nCols)
    const row = randRange(0, this.nRows)
    if (this.snake.bodyMap[`${row},${col}`]) {
      return this.generateFood()
    }
    this.food.col = col
    this.food.row = row
  }

  snakeDidEatFood() {
    return this.snake.headRow === this.food.row && this.snake.headCol === this.food.col;
  }

  gameIsOver() {
    const { headCol, headRow } = this.snake
    return headCol < 0 ||
      headCol >= this.nCols ||
      headRow < 0 ||
      headRow >= this.nRows ||
      this.snake.didCollideWithSelf // if the snake eats itself
  }

  paintScore() {
    this.painter.paintText({
      text: this.score,
      fillStyle: 'black',
      font: '20px Arial',
      x: this.width - 25,
      y: 30,
    })
  }

  paintGameOver() {
    const { prevHeadCol, prevHeadRow } = this.snake

    drawSadFace(this.painter.ctx, this.cellMap.cells[prevHeadRow][prevHeadCol])

    this.painter.paintText({
      text: 'GAME OVER ! ! !',
      fillStyle: 'red',
      font: '25px Arial',
      x: this.width / 2 - 80,
      y: 60
    })
  }
}


/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawSadFace(ctx, { width, height, x, y }) {
  const leftEye = {
    x: x + (width * 0.2),
    y: y + (height * 0.2),
  }
  const rightEye = {
    x: x + (width * 0.6),
    y: y + (height * 0.2),
  }

  ctx.beginPath()
  ctx.fillStyle = 'limegreen'

  ctx.fillRect(leftEye.x, leftEye.y, 3, 3)
  ctx.fillRect(rightEye.x, rightEye.y, 3, 3)

  const mouth = {
    startX: leftEye.x - 1,
    startY: y + (height * 0.8),
    cpx: x + (width / 2),
    cpy: y + (height * 0.4),
    endX: rightEye.x + 4,
    endY: y + (height * 0.8),
  }

  ctx.moveTo(mouth.startX, mouth.startY);
  ctx.quadraticCurveTo(mouth.cpx, mouth.cpy, mouth.endX, mouth.endY)
  ctx.fill()
  ctx.closePath()
} 