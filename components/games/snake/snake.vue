
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
        game.run(() => {
          game.snake.updateBody()
          game.paintCells()
          if (game.snakeAteFood()) {
            game.emit('incrementScore')
            game.generateFood()
            game.snake.nSegmentsToPush += 3
          }
        });
      } else {
        game.pause()
      }
    },
    gameOver(newVal, oldVal) {
      if (newVal) {
        game.pause()
        game.paintGameOver()
        this.$emit('update:gameOn', false)
      }
    },
    controls: {
      deep: true,
      handler({ arrowLeft, arrowUp, arrowRight, arrowDown, p, o }) {
        if (p) {
          game.pause()
        }
        if (o) {
          game.resume()
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
    console.log('hey we reneder', this.ctx)
  }
}
</script>