
<script>
import game from '@/components/games/snake/game.js'
export default {
  props: {
    options: Object,
    gameOn: Boolean,
    gameOver: Boolean,
    score: Number,
  },
  watch: {
    gameOn(val) {
      game.gameOn = val
    },
  },
  mounted() {
    game.setup(this.options);
    game.run()
    game.on('gameOver', () => this.$emit('update:gameOver', true))
    game.on('updateScore', score => this.$emit('update:score', score))
  },
  render() { }
}
</script>