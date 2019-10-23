
<script>

import Game from '@/components/games/snake/models/game.js'

const game = new Game({ animationRate: 6 });

export default {
  inject: ['ctxProvider'],
  props: {
    dimensions: Object,
    controls: Object,
    snakeSetup: Object,
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
              this.$emit('update:gameOn', false)
              this.$emit('update:gameOver', true)
              return
            }
            if (game.snakeDidEatFood()) {
              this.$emit('update:score', this.score + 1)
              game.generateFood()
              game.snake.nSegmentsToPush += 3
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
      handler({ arrowLeft, arrowUp, arrowRight, arrowDown, p, o }) {
        if (p) {
          game.stop()
          this.$emit('update:gameOn', false)
        }
        if (o) {
          game.resume()
          this.$emit('update:gameOn', true)
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
    }
  },
  mounted() {
    game.setup({
      ctx: this.ctxProvider.ctx,
      dimensions: this.dimensions,
      snake: this.snakeSetup,
    });
  
    game.on('gameOver', () => this.$emit('update:gameOver', true))
    game.on('paused', () => this.$emit('update:gameOn', false))
    game.on('incrementScore', () => this.$emit('update:score', this.score + 1))
    game.on('decrementScore', () => this.$emit('update:score', this.score - 1))
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>