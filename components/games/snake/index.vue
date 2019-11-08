<template>
  <game-canvas v-slot="{ hasCtx, dimensions, snakeSetup }">
    <Snake
      v-if="hasCtx"
      ref="snake"
      :dimensions="dimensions"
      :controls="controls"
      :snakeSetup="{ gameMode, ...snakeSetup }"
      :animationRate="animationRate"
      v-bind.sync="gameState"
      @reset="reset"
    />
  </game-canvas>
</template>

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'

const STORAGE_NAMESPACE = 'snake'

export default {
  props: {
    controls: Object,
    // dimensions: Object,
  },
  components: {
    GameCanvas,
    Snake,
  },
  data() {
    return {
      snakeSpeed: {
        value: 2 || 4,
        min: 1,
        max: 7,
      },
      gameState: {
        gameOn: false,
        gameOver: false,
        score: 0,
      },
      // snakeSetup: {
      //   row: 20, // start row
      //   col: 20, // start col
      //   gameMode: 'classic'
      // }
      gameMode: 'classic'
    }
  },
  mounted() {
    this.loadSettings()
    window.addEventListener('beforeunload', this.saveSettings)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.saveSettings)
  },
  computed: {
    animationRate() {
      switch (this.snakeSpeed.value) {
        case 1:
          return 8
        case 2:
          return 7
        case 3:
          return 6
        case 4:
          return 5
        case 5:
          return 4
        case 6:
          return 3
        case 7:
          return 2
      }
    },
    gameStateControlText() {
      if (this.gameState.gameOn) {
        return 'Pause'
      } else if (this.gameState.gameOver) {
        return 'Reset'
      } else {
        return 'Start'
      }
    },
  },
  methods: {
    loadSettings() {
      let saved = localStorage.getItem(STORAGE_NAMESPACE)
      if (saved) {
        saved = JSON.parse(saved)
        // this.snakeSetup.gameMode = saved.snakeSetup.gameMode
        this.snakeSpeed.value = saved.snakeSpeed.value
      }
    },
    saveSettings() {
      localStorage.setItem(STORAGE_NAMESPACE, JSON.stringify({
        // snakeSetup: this.snakeSetup,
        snakeSpeed: this.snakeSpeed,
      }))
    },
    reset() {
      this.$refs.snake.setup()
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
