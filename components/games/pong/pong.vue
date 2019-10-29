<script>
import Game from '@/components/games/pong/models/game.js'

const game = new Game()

export default {
  inject: ['ctxProvider'],
  props: {
    dimensions: Object,
    controls: Object,
    gameOn: Boolean,
    gameOver: Boolean,
    score: Number,
  },
  watch: {
    gameOn(val) {
      if (val) {
        if (game.cachedRunCallback) { // RESUME
          game.resume()
        } else { // START
          game.run(() => {
            const ballHitLeftPaddle = game.physics.checkBallPaddle(game.ball, game.leftPaddle)
            const ballHitRightPaddle = game.physics.checkBallPaddle(game.ball, game.rightPaddle)
            game.physics.checkBallFloorCiel(game.ball)
            game.physics.checkPaddlesFloorCiel([game.leftPaddle, game.rightPaddle])
            game.leftPaddle.updatePosition()
            game.rightPaddle.updatePosition()
            game.ball.updatePosition()
            if (game.physics.checkBallHitWall(game.ball)) {
              this.update('gameOver', true)
              this.update('gameOn', false)
              game.stop()
              game.painter.text({ text: 'GAME OVER ! ! !' })
            } else if (ballHitLeftPaddle || ballHitRightPaddle) {
              this.update('score', this.score + 1)
              if (this.score > 0 && this.score % 5 === 0) {
                game.ball.dx > 0
                  ? game.ball.dx += 1
                  : game.ball.dx -= 1
              }
            }
            game.paint()
          })
        }
      } else { // STOP
        game.stop()
      }
    },
    controls: {
      deep: true,
      handler({ arrowUp, arrowDown, w, s, p, r}) {
        if (p) {
          game.stop()
          this.update('gameOn', false)
        }
        if (r) {
          if (this.gameOver) {
            this.reset()
          } else {
            game.resume()
            this.update('gameOn', true)
          }
        }

        if (arrowUp && !arrowDown) {
          game.rightPaddle.dy = -4
        } else if (arrowDown && !arrowUp) {
          game.rightPaddle.dy = 4
        } else {
          game.rightPaddle.dy = 0
        }

        if (w && !s) {
          game.leftPaddle.dy = -4
        } else if (!w && s) {
          game.leftPaddle.dy = 4
        } else {
          game.leftPaddle.dy = 0
        }
      }
    }
  },
  mounted() {
    this.setup()
  },
  methods: {
    update(key, val) {
      this.$emit(`update:${key}`, val)
    },
    setup() {
      game.setup({
        ctx: this.ctxProvider.ctx,
        width: this.dimensions.width,
        height: this.dimensions.height
      })
    },
    reset() {
      this.setup()
      this.update('gameOn', false)
      this.update('gameOver', false)
      this.update('score', 0)
    }
  },
  render() { }
}
</script>

