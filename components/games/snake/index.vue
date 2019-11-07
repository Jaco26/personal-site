<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <j-tiles box>
        <j-tile is-parent notification is-light is-vertical style="width: 200px">
          
          <j-tile style="flex: 0; margin-bottom: 1rem;">
            <j-tile is-parent style="padding: 0">
              <j-tile is-child >
                <b-button :type="gameState.gameOver ? 'is-danger' : gameState.gameOn ? 'is-warning' : 'is-success'" @click="onGameStateControlClick">
                  {{gameStateControlText}}
                </b-button>
              </j-tile>
              <j-tile is-child has-text-right>
                <p class="subtitle is-5">
                  <strong>Score:</strong> {{gameState.score}}
                </p>
              </j-tile>
            </j-tile>
          </j-tile>

          <j-tile is-child is-light>
            <div class="columns">
              <div class="column">
                <b-field label="Snake Speed">
                  <b-slider :min="snakeSpeed.min" :max="snakeSpeed.max" v-model="snakeSpeed.value">
                    <b-slider-tick v-for="n in [1,2,3,4,5,6,7]" :key="n" :value="n">{{n}}</b-slider-tick>
                  </b-slider>
                </b-field>
              </div>
            </div>
            
            <div class="columns">
              <div class="column">
                <b-field label="Game Mode">
                  <b-radio v-model="snakeSetup.gameMode" native-value="classic">Classic</b-radio>
                </b-field>
                <b-field>
                  <b-radio v-model="snakeSetup.gameMode" native-value="polluter">Polluter</b-radio>
                </b-field>
              </div>
            </div>
          </j-tile>
        </j-tile>

        <j-tile is-parent >
          <j-tile is-child>
            <game-canvas style="transform: translateY(-10px)" :width="dimensions.width" :height="dimensions.height" v-slot="{ hasCtx }">
              <Snake
                v-if="hasCtx"
                ref="snake"
                :dimensions="dimensions"
                :controls="controls"
                :snakeSetup="snakeSetup"
                :animationRate="animationRate"
                v-bind.sync="gameState"
                @reset="reset"
              />
            </game-canvas>
          </j-tile>
        </j-tile>
      </j-tiles>

    </div>
  </div>
</template> 

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'

const STORAGE_NAMESPACE = 'snake'

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
      snakeSpeed: {
        value: 4,
        min: 1,
        max: 7,
      },
      gameState: {
        gameOn: false,
        gameOver: false,
        score: 0,
      },
      snakeSetup: {
        row: 20, // start row
        col: 20, // start col
        gameMode: 'classic'
      }
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
        this.snakeSetup.gameMode = saved.snakeSetup.gameMode
        this.snakeSpeed.value = saved.snakeSpeed.value
      }
    },
    saveSettings() {
      localStorage.setItem(STORAGE_NAMESPACE, JSON.stringify({
        snakeSetup: this.snakeSetup,
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
