
<script>
import Game from '@/components/games/snake/models/game.js'

const game = new Game({ animationRate: 20 });

export default {
  props: {
    options: Object,
    controls: Object,
    gameOn: Boolean,
    gameOver: Boolean,
    score: Number,
  },
  watch: {
    gameOn(val) {
      if (val) {
        game.run(() => {
          game.cellMap.normalify(game.head)
          game.head += 1
          game.cellMap.snakeify(game.head)
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
    }

  },
  mounted() {
    game.setup(this.options);
    
    game.on('gameOver', () => this.$emit('update:gameOver', true))
    game.on('incrementScore', () => this.$emit('update:score', this.score + 1))
    game.on('decrementScore', () => this.$emit('update:score', this.score - 1))
  },
  render(h) {
    console.log('hey we reneder')
  }
}
</script>