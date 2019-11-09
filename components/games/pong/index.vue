
<template>
  <div>
    <div class="columns is-centered is-vcentered">
      <div class="is-hidden-desktop column is-narrow">
        Sorry, my version of Pong doesn't work on your phone/tablet yet. You can play it on a laptop or desktop though!
      </div>
      <div class="is-hidden-touch column is-narrow">
        <div class="columns level">
          <div class="column">
            <b-button @click="onGameStateControlClick">{{gameStateControlText}}</b-button>
          </div>
          <div class="column is-narrow">
              <span>Score: {{gameState.score}}</span>
          </div>
        </div>
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
      </div>
    </div>
  </div>
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
        ? this.$refs.pong.reset()
        : this.gameState.gameOn = !this.gameState.gameOn
    }
  }
}
</script>