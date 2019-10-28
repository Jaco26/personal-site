import GameBase from '@/components/games/game-base.js'
import Ball from './ball.js'
import Paddle from './paddle'
import Painter from './painter'
import Physics from './physics'


/**
 * @typedef SetupOptions
 * @property {CanvasRenderingContext2D} ctx
 * @property {Number} width
 * @property {Numnber} height
 */

export default class Game extends GameBase {

  /** @type {Ball} */
  ball = null
  /** @type {Paddle} */
  leftPaddle = null
  /** @type {Paddle} */
  rightPaddle = null

  /** @type {Physics} */
  physics = null
  /** @type {Painter} */
  painter = null

  /**
   * 
   * @param {SetupOptions} 
   */
  setup({ ctx, width, height }) {
    this.physics = new Physics({ width, height })
    this.painter = new Painter({ ctx, width, height })

    const centerX = width / 2;
    const centerY = height / 2;
    const paddleW = 15;
    const paddleH = 80;
    
    const ball = new Ball()
    ball.x = centerX
    ball.y = centerY
    ball.r = 10
    ball.dx = Math.random() > 0.5 ? 5 : -5
    ball.dy = 0
    this.ball = ball

    const paddle1 = new Paddle()
    paddle1.x = 0
    paddle1.y = centerY - paddleH / 3 // start paddle off center to prevent an infinte game with no user input
    paddle1.width = paddleW
    paddle1.height = paddleH
    paddle1.isLeft = true
    this.leftPaddle = paddle1

    const paddle2 = new Paddle()
    paddle2.x = width - paddleW
    paddle2.y = centerY - paddleH / 3 // start paddle off center to prevent an infinte game with no user input
    paddle2.width = paddleW
    paddle2.height = paddleH
    this.rightPaddle = paddle2

    this.paint()
  }

  paint() {
    this.painter.clear()
    this.painter.arc(this.ball)
    this.painter.rect(this.leftPaddle)
    this.painter.rect(this.rightPaddle)
  }
}