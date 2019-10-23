<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <b-button @click="onGameStateControlClick">
          {{gameStateControlText}}
        </b-button>
        <b-button @click="gameSetup.animationRate -= 1">
          + speed
        </b-button>
        <b-button @click="gameSetup.animationRate += 1">
          - speed
        </b-button>
        <span>
          {{gameSetup.animationRate}}
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
        :animationRate="gameSetup.animationRate"
        v-bind.sync="gameState"
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
        animationRate: 6,
      }
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
  },
  methods: {
    onGameStateControlClick() {
      this.gameState.gameOver
        ? this.$refs.snake.reset()
        : this.gameState.gameOn = !this.gameState.gameOn
    }
  }
}
</script>