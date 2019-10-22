
<script>

import Game from '@/components/games/snake/models/game.js'

const game = new Game({ animationRate: 6 });

export default {
  inject: ['ctxProvider'],
  props: {
    dimensions: Object,
    controls: Object,
    isPolluter: Boolean,
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
      handler({ arrowLeft, arrowUp, arrowRight, arrowDown }) {
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
    const prefs = JSON.parse(localStorage.getItem('snakePrefs'))
    game.setup({
      ctx: this.ctxProvider.ctx,
      dimensions: this.dimensions,
      snake: {
        row: 4,
        col: 5,
        isPolluter: this.isPolluter
      }
    });
  
    game.on('gameOver', () => this.$emit('update:gameOver', true))
    game.on('incrementScore', () => this.$emit('update:score', this.score + 1))
    game.on('decrementScore', () => this.$emit('update:score', this.score - 1))
  },
  render(h) {
    console.log('hey we reneder', this.ctx)
  }
}
</script>