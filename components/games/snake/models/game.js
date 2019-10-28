import GameBase from '@/components/games/models/game-base'
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

  food = {
    row: null,
    col: null,
  }

  nRows = null
  nCols = null

  /** @type {Snake} */
  snake = null
  /** @type {CellMap} */
  cellMap = null
  /** @type {Painter} */
  painter = null

   /** @param {SetupOptions} options */
  setup({ ctx, animationRate, dimensions, snake }) {
    this.nRows = dimensions.nRows
    this.nCols = dimensions.nCols
    this.cellMap = new CellMap(dimensions);
    this.painter = new Painter(ctx);
    this.snake = new Snake(snake);
    this.animationRate = animationRate
    this.generateFood()
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

  paintGameOver() {
    const ctx = this.painter.ctx;
    ctx.fillStyle = 'orange'
    ctx.font = '30px Arial'
    ctx.fillText('GAME OVER ! ! !', ctx.canvas.width / 2 - 30, 60)
  }
}