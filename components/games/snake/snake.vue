
<script>

import Game from '@/components/games/snake/models/game.js'

let game;

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
              game.stop()
              game.paintGameOver()
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
            this.$emit('reset')
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
    // IMPORTANT: Always instantiate new Game on mounted. Otherwise, the game
    // instance lives on in memory after the compontent is destroyed. This results
    // in strange behavior with the game.run callback.
    // The game would behave as expected the first time Snake.vue was loaded. But when
    // you navigated away and then back, the start/stop controls would get all wonky and 
    // the score would not update. This is because the Game was being instantiated when the 
    // script containing the code for Snake.vue loaded, NOT when the component mounted. So,
    // when I tried to emit update events from inside the game.run callback, the component variables
    // stored in the callbacks lexical memory/scope or whatever no longer existed.
    game = new Game() 
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
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>