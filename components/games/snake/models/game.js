import GameBase from '@/components/games/models/game-base'
import CellMap from './cell-map'
import Painter from './painter'

/**
 * @typedef Options
 * @property {CanvasRenderingContext2D} ctx
 * @property {Number} nRows
 * @property {Number} nCols
 * @property {Number} width
 * @property {Number} height
 */

export default class Game extends GameBase {

  head = 300

  /** @type {CellMap} */
  cellMap = null
  /** @type {Painter} */
  painter = null

  constructor({ animationRate = 0 } = {}) {
    super(animationRate)
  }

   /** @param {Options} options */
  setup({ ctx, ...dimensions }) {
    this.cellMap = new CellMap(dimensions);
    this.painter = new Painter(ctx);
    this.paintCells()
  }

  paintCells() {
    this.cellMap.cells.forEach(cell => this.painter.paintCell(cell))
  }

  paintGameOver() {
    const ctx = this.painter.ctx;
    ctx.fillStyle = 'orange'
    ctx.font = '20px Arial'
    ctx.fillText('GAME OVER ! ! !', ctx.canvas.width / 2 - 30, 60)
  }
}