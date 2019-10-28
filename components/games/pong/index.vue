
<template>
  <div>
    <b-button @click="onGameStateControlClick">{{gameStateControlText}}</b-button>
    {{gameState.score}}
    <game-canvas :width="dimensions.width" :height="dimensions.height" v-slot="{ hasCtx }">
      <Pong
        v-if="hasCtx"
        ref="pong"
        :dimensions="dimensions"
        :controls="controls"
        v-bind.sync="gameState"
      />
    </game-canvas>
  </div>
</template>

<script>
import GameCanvas from '@/components/games/game-canvas'
import Pong from '@/components/games/pong/pong'
export default {
  components: {
    GameCanvas,
    Pong,
  },
  props: {
    controls: Object,
    dimensions: Object,
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
    }
  },
  methods: {
    onGameStateControlClick() {
      this.gameState.gameOver
        ? this.$refs.pong.reset()
        : this.gameState.gameOn = !this.gameState.gameOn
    }
  }
}
</script>