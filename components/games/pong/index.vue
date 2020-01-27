
<template>
  <j-row class="justify-center">
    <j-col class="d-flex flex-column align-center">
      <section class="toolbar dense flat">
        <div class="toolbar-actions">
          <button class="btn primary small" :class="gameStateClass" @click="onGameStateControlClick">
            {{gameStateControlText}}
          </button>
          <span>Score: {{gameState.score}}</span>
        </div>
      </section>
      <game-canvas v-slot="{ hasCtx, dimensions }">
        <Pong
          v-if="hasCtx"
          ref="pong"
          :dimensions="dimensions"
          :controls="controls"
          v-bind.sync="gameState"
          @reset="reset"
        />
      </game-canvas>
    </j-col>
  </j-row>
</template>

<script>
import GameCanvas from '@/components/games/game-canvas'
import Pong from '@/components/games/pong/pong'
export default {
  inject: ['breakpoint'],
  components: {
    GameCanvas,
    Pong,
  },
  props: {
    controls: Object,
  },
  mounted() {
    console.log('just mounted pong')
  },
  beforeDestroy() {
    console.log('about to destroy pong')
  },
  data() {
    return {
      gameState: {
        gameOn: false,
        gameOver: false,
        score: 0,
      },
    }
  },
  computed: {
    gameStateControlText() {
      if (this.gameState.gameOn) {
        return 'Pause'
      } else if (this.gameState.gameOver) {
        return 'Reset'
      } else {
        return 'Start'
      }
    },
    gameStateClass() {
      if (this.gameState.gameOn) {
        return 'primary'
      } else if (this.gameState.gameOver) {
        return 'error'
      } else {
        return 'success'
      }
    }
  },
  methods: {
    reset() {
      this.$refs.pong.setup()
      this.gameState.gameOn = false;
      this.gameState.gameOver = false;
      this.gameState.score = 0
    },
    onGameStateControlClick() {
      this.gameState.gameOver
        ? this.reset()
        : this.gameState.gameOn = !this.gameState.gameOn
    }
  }
}
</script>