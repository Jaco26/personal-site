
<script>

import Game from '@/components/games/snake/models/game.js'

const game = new Game({ animationRate: 6 });

export default {
  props: {
    options: Object,
    gameOn: Boolean,
    gameOver: Boolean,
    gameScore: Number,
  },
  watch: {
    gameOn(val) {
      if (val) {
        game.run(() => {
          game.snake.updateBody()
          game.paintCells()
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
    'options.controls': {
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
    game.setup({
      ctx: this.options.ctx,
      dimensions: this.options.dimensions,
      snake: {
        row: 4,
        col: 5,
        isPolluter: true
      }
    });
  
    game.on('gameOver', () => this.$emit('update:gameOver', true))
    game.on('incrementScore', () => this.$emit('update:score', this.gameScore + 1))
    game.on('decrementScore', () => this.$emit('update:score', this.gameScore - 1))
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>