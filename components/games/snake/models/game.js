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
  food = null

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
    this.snake = new Snake({ initPosition, gameMode });
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

  getCellKind(i) {
    if (this.snake.bodyMap[i]) {
      return 2
    } else if (this.food === i) {
      return 3
    }
    return 1
  }

  paintCells() {
    this.painter.clearCanvas()
    this.cellMap.cells.forEach((cell, i) => {
      cell.kind = this.getCellKind(i)
      this.painter.paintCell(cell)
    })
  }

  generateFood() {
    const food = randRange(0, this.nCols * this.nRows)
    if (this.snake.bodyMap[food]) {
      this.generateFood()
    }
    this.food = food
  }

  snakeDidEatFood() {
    return this.snake.headPosition === this.food
  }

  gameIsOver() {
    return this.snake.headPosition < 0 ||
      this.snake.headPosition > this.nCols * this.nRows ||
      (this.snake.dx > 0 && this.snake.headPosition % this.nCols === 0) ||
      (this.snake.dx < 0 && this.snake.prevHeadPosition % this.nCols === 0) ||
      this.snake.didCollideWithSelf
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
    if (this.snake.didCollideWithSelf) {
      const head = this.cellMap.getCell(this.snake.headPosition)
      head.kind = 4 // game over
      this.painter.paintCell(head)
    }

    drawSadFace(this.painter.ctx, this.cellMap.getCell(this.snake.prevHeadPosition))

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