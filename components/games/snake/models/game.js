import GameBase from '@/components/games/models/game-base'
import CellMap from './cell-map'
import Painter from './painter'
import Snake from './snake'

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
 
 */

export default class Game extends GameBase {

  /** @type {Snake} */
  snake = null
  /** @type {CellMap} */
  cellMap = null
  /** @type {Painter} */
  painter = null

  constructor({ animationRate = 0 } = {}) {
    super(animationRate)
  }

   /** @param {SetupOptions} options */
  setup({ ctx, dimensions, snake }) {
    this.cellMap = new CellMap(dimensions);
    this.painter = new Painter(ctx);
    this.snake = new Snake(snake);
    this.paintCells()
  }

  paintCells() {
    this.cellMap.cells.forEach((row, ri) => {
      row.forEach((cell, ci) => {
        if (this.snake.isSnake(ri, ci)) {
          cell.kind = 2
        } else {
          cell.kind = 1
        }
        this.painter.paintCell(cell)
      })
    })

  }

  paintGameOver() {
    const ctx = this.painter.ctx;
    ctx.fillStyle = 'orange'
    ctx.font = '20px Arial'
    ctx.fillText('GAME OVER ! ! !', ctx.canvas.width / 2 - 30, 60)
  }
}