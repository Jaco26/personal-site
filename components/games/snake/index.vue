<template>
  <j-row class="justify-center">
    <j-col class="d-flex flex-column align-center ">
      <section class="toolbar dense flat ">
        <div class="toolbar-actions">
          <j-col class="shrink px-0">
            <button class="btn small" :class="gameStateClass" @click="onGameStateControlClick">
              {{gameStateControlText}}
            </button>
          </j-col>
          <j-col class="d-flex justify-end align-center px-0">
            <div class="px-2">
              <j-checkbox id="show-score-checkbox" label="Show Score" v-model="showScore"></j-checkbox>
            </div>
            <div class="px-2">
              <j-slider
                blur
                ref="slider"
                id="speed-slider"
                :label="`Speed: ${snakeSpeed.value}`"
                step="1"
                tickmarks
                :min="snakeSpeed.min"
                :max="snakeSpeed.max"
                v-model="snakeSpeed.value"
              ></j-slider>
            </div>
            <div class="pl-2">
              <j-select
                blur
                label="Game Mode"
                v-model="gameMode"
                :options="['classic', 'polluter']"
              >
                <template v-slot:option="{ value }">
                  {{value[0].toUpperCase() + value.slice(1)}}
                </template>
              </j-select>
            </div>
          </j-col>
        </div>
      </section>

      <game-canvas v-slot="{ hasCtx, dimensions, snakeOptions }">
        <Snake
          v-if="hasCtx"
          ref="snake"
          :dimensions="dimensions"
          :controls="controls"
          :gameMode="gameMode"
          :showScore="showScore"
          :snakeOptions="snakeOptions"
          :animationRate="animationRate"
          v-bind.sync="gameState"
          @reset="reset"
        />
      </game-canvas>
    </j-col>
  </j-row>
</template>

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'

const STORAGE_NAMESPACE = 'snake'

export default {
  inject: ['breakpoint'],
  props: {
    controls: Object,
  },
  components: {
    GameCanvas,
    Snake,
  },
  data() {
    return {
      showSettings: false, // mobile settings menu
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
      gameMode: 'classic',
      showScore: false,
    }
  },
  mounted() {
    if (this.breakpoint.isMobile) {
      this.snakeSpeed.value = 2
    }
    this.loadSettings()
    window.addEventListener('beforeunload', this.saveSettings)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.saveSettings)
  },
  computed: {
    animationRate() {
      switch (this.snakeSpeed.value) {
        case 1: return 8;
        case 2: return 7;
        case 3: return 6;
        case 4: return 5;
        case 5: return 4;
        case 6: return 3;
        case 7: return 2;
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
    gameStateClass() {
      if (this.gameState.gameOn) {
        return 'light'
      } else if (this.gameState.gameOver) {
        return 'error'
      } else {
        return 'success'
      }
    }
  },
  methods: {
    loadSettings() {
      let saved = localStorage.getItem(STORAGE_NAMESPACE)
      if (saved) {
        saved = JSON.parse(saved)
        this.showScore = saved.showScore
        this.gameMode = saved.gameMode
        this.snakeSpeed.value = saved.snakeSpeed.value
      }
    },
    saveSettings() {
      localStorage.setItem(STORAGE_NAMESPACE, JSON.stringify({
        showScore: this.showScore,
        gameMode: this.gameMode,
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
    },
    onShowTouchSettings() {
      this.showSettings = true;
      this.gameState.gameOn = false
    }
  },
}
</script>

<style lang="scss">
@import 'assets/style/_variables.scss';
@import 'assets/style/tools/mixins.scss';
.toolbar {
  margin: 0;
  height: $navbar-height;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 2px;
  @include elevation(2px);
  

  &.dense {
    height: $navbar-dense-height;
  }

  &.flat {
    box-shadow: none;
  }

  &.outlined {
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .toolbar-title {
    font-size: 1.25rem;
    font-weight: 700;
    padding-right: 1rem;
  }

  .toolbar-actions {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
}

</style>