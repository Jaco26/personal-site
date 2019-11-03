<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <b-button @click="onGameStateControlClick">
          {{gameStateControlText}}
        </b-button>
        <b-button :disabled="!animationRate.canIncrease" @click="adjustAnimationRate(-1)">
          + speed
        </b-button>
        <b-button :disabled="!animationRate.canDecrease" @click="adjustAnimationRate(1)">
          - speed
        </b-button>
        <span>
          {{snakeSpeed}}
        </span>
      </div>
      <div class="column is-narrow">
        <b-checkbox v-model="gameSetup.snake.isPolluter">Polluter</b-checkbox>
      </div>
      <div class="column is-narrow">
        <span>Score: {{gameState.score}}</span>
      </div>
    </div>
    <game-canvas :width="dimensions.width" :height="dimensions.height" v-slot="{ hasCtx }">
      <Snake
        v-if="hasCtx"
        ref="snake"
        :dimensions="dimensions"
        :controls="controls"
        :snakeSetup="gameSetup.snake"
        :animationRate="animationRate.value"
        v-bind.sync="gameState"
        @reset="reset"
      />
    </game-canvas>
  </div>
</template> 

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'
export default {
  props: {
    controls: Object,
    dimensions: Object,
  },
  components: {
    GameCanvas,
    Snake,
  },
  data() {
    return {
      gameState: {
        gameOn: false,
        gameOver: false,
        score: 0,
      },
      gameSetup: {
        snake: {
          isPolluter: false,
          row: 20,
          col: 20
        },
      },
      animationRateProxy: {
        value: 5,
        min: 2, // fastest
        max: 8, // slowest
      },
    }
  },
  computed: {
    animationRate() {
      return {
        value: this.animationRateProxy.value,
        canIncrease: this.animationRateProxy.value > this.animationRateProxy.min,
        canDecrease: this.animationRateProxy.value < this.animationRateProxy.max
      }
    },
    snakeSpeed() {
      switch (this.animationRate.value) {
        case 8:
          return 1
        case 7:
          return 2
        case 6:
          return 3
        case 5:
          return 4
        case 4:
          return 5
        case 3:
          return 6
        case 2:
          return 7
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
    adjustAnimationRate(val) {
      const current = this.animationRateProxy.value
      if (current + val <= this.animationRateProxy.max && current + val >= this.animationRateProxy.min) {
        this.animationRateProxy.value += val
      }
    },
    decrementSnakeSpeed() {
      if (this.gameSetup.animationRate < 8) {
        this.gameSetup.animationRate += 1
      }
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