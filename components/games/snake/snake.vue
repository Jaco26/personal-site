
<script>

import Game from '@/components/games/snake/models/game.js'
import CellMap from './models/cell-map';

let game;

export default {
  inject: ['breakpoint'],
  props: {
    ctx: Function,
    dimensions: Object,
    controls: Object,
    gameMode: String,
    showScore: Boolean,
    trackHistory: Boolean,
    animationRate: Number,
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
            game.snake.updateBody(game.nCols, this.trackHistory) // pass in the rowLength so as to accurately update snake body along y-axis
            if (game.gameIsOver()) {
              game.stop()
              game.paintGameOver()
              this.update('gameOn', false)
              this.update('gameOver', true)
              return
            }
            if (game.snakeDidEatFood()) {
              this.update('score', this.score + 1)
              game.score += 1
              game.generateFood()
              game.snake.nSegmentsToPush += 6
              
            }
            game.paintCells()
            if (this.showScore) {
              game.paintScore()
            }
          });
        }
      } else {
        game.stop()
      }
    },
    showScore(val ){
      if (val) 
        game.paintScore()
      else 
        game.paintCells()
    },
    trackHistory(val) {
      game.options.trackHistory = val
      if (val)
        game.paintScore()
      else
        game.paintCells()
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
    animationRate(val) {
      game.animationRate = val
    },
    gameMode(val) {
      game.snake.gameMode = val
    },
    dimensions: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.width !== oldVal.width || newVal.height !== oldVal.height) {
          game.resize(newVal.width, newVal.height, newVal.nRows, newVal.nCols)
        }
      }
    }
  },
  computed: {
    initPosition() {
      if (this.breakpoint.isMobile) {
        return 126
      } else if (this.breakpoint.isTablet) {
        return 260
      } else {
        return 551
      }
    }
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
        ctx: this.ctx(),
        dimensions: this.dimensions,
        initPosition: this.initPosition,
        animationRate: this.animationRate,
        gameMode: this.gameMode,
        paintScore: this.showScore,
        trackHistory: this.trackHistory,
      })
    },
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>