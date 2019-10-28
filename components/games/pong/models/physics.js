/**
 * @typedef Environment
 * @property {Number} width
 * @property {Number} height
 * 
 */


/**
 * This class provides methods which take game objects like the ball
 * and paddles and mutates their velocity properties based on their 
 * calculated positons relative to each other and the game boundaries
 */
export default class Physics {
  /**
   * 
   * @param {Environment} environment 
   */
  constructor(environment) {
    this.env = environment
  }

  // Keep paddles from scolling our of the top or bottom
  // boundaries of the game
  checkPaddlesFloorCiel(paddles) {
    paddles.forEach(paddle => {
      if (paddle.y + paddle.height > this.env.height) {
        paddle.dy = 0
        paddle.y = this.env.height - paddle.height
      } else if (paddle.y < 0) {
        paddle.dy = 0
        paddle.y = 0
      }
    })
  }

  // Bounce the ball off of the top and bottom boundaries of the game
  checkBallFloorCiel(ball) {
    if (ball.y + ball.r > this.env.height) { // ball hit floor
      // ensure ball is fully above game boundaries to prevent bug where ball sticks to floor
      ball.y = this.env.height - (ball.r + 1)
      ball.dy = -ball.dy // reverse the vertical velocity of the ball
    } else if (ball.y - ball.r < 0) { // ball hit cieling
      ball.y = 0 + (ball.r + 1)
      ball.dy = -ball.dy
    }
  }

  // Check if ball hit paddle
  _ballPaddleCheckX(ball, paddle) {
    return paddle.isLeft
      ? ball.x - ball.r < paddle.x + paddle.width // ball hit left paddle
      : ball.x + ball.r > paddle.x // ball hit right paddle
  }

  // Modify ball verticle velocity when ball hits paddle based on how far
  // away it hit from the center of the paddle
  _ballPaddleDyMod(ball, paddle) {
    const paddleCenter = paddle.y + paddle.height / 2
    return (ball.y - paddleCenter) / 10
  }

  // Bounce ball off of paddles
  checkBallPaddle(ball, paddle) {
    if (
      ball.y < paddle.y + paddle.height &&
      ball.y > paddle.y &&
      this._ballPaddleCheckX(ball, paddle)
    ) {
      ball.dy = this._ballPaddleDyMod(ball, paddle)
      ball.dx = -ball.dx // reverse ball horizontal velocity
      ball.x = ball.dx + (paddle.isLeft ? paddle.width : paddle.x) // ensure ball is completely outside paddle to prevent ball sticking to paddle
      return true
    }
    return false
  }

  // return true if ball hit a wall (game over...)
  checkBallHitWall(ball) {
    return ball.x + ball.r > this.env.width || ball.x - ball.r < 0
  }
}
