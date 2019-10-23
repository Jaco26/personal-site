
<script>

import Game from '@/components/games/snake/models/game.js'

const game = new Game();

export default {
  inject: ['ctxProvider'],
  props: {
    dimensions: Object,
    controls: Object,
    snakeSetup: Object,
    animationRate: {
      type: Number,
      default: 5,
    },
    gameOn: Boolean,
    gameOver: Boolean,
    score: Number,
  },
  watch: {
    gameOn(val) {
      if (val) {
        if (game.cachedRunCallback) {
          game.resume()
        } else {
          game.run(() => {
            game.snake.updateBody()
            if (game.gameIsOver()) {
              game.stop();
              game.paintGameOver();
              this.update('gameOn', false)
              this.update('gameOver', true)
              return
            }
            if (game.snakeDidEatFood()) {
              this.update('score', this.score + 1)
              game.generateFood()
              game.snake.nSegmentsToPush += 6
            }
            game.paintCells()
          });
        }
      } else {
        game.stop()
      }
    },
    controls: {
      deep: true,
      handler({ arrowLeft, arrowUp, arrowRight, arrowDown, p, r }) {
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
        if (arrowLeft) {
          game.snake.setDirection('arrowLeft')
        }
        if (arrowUp) {
          game.snake.setDirection('arrowUp')
        }
        if (arrowRight) {
          game.snake.setDirection('arrowRight')
        }
        if (arrowDown) {
          game.snake.setDirection('arrowDown')
        }
      }
    },
    'animationRate'(val) {
      game.animationRate = val
    },
    'snakeSetup.isPolluter'(val) {
      game.snake.isPolluter = val
    },
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
        dimensions: this.dimensions,
        snake: this.snakeSetup,
        animationRate: this.animationRate,
      })
    },
    reset() {
      this.setup()
      this.update('gameOn', false)
      this.update('gameOver', false)
      this.update('score', 0)
    },
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>