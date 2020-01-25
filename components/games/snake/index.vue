<template>
  <j-row class="justify-center">
    <j-col class="d-flex flex-column align-center">
      <section class="toolbar dense flat hidden-mobile">
        <div class="toolbar-actions">
          <j-col class="px-0">
            <button class="btn small" :class="gameStateClass" @click="onGameStateControlClick">
              {{gameStateControlText}}
            </button>
            <span class="ml-1">
              "P" = pause, "R" = start/reset
            </span>
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

      <game-wrap v-slot="{ ctx, dimensions, keyboard }">
        <Snake
          ref="snake"
          :ctx="() => ctx"
          :dimensions="dimensions"
          :controls="keyboard"
          :gameMode="gameMode"
          :showScore="showScore"
          :animationRate="animationRate"
          v-bind.sync="gameState"
          @reset="reset"
        />
      </game-wrap>

      <div id="mobile-controls" class="hidden-above-mobile">
        <div class="d-flex justify-between">
          <div class="shrink d-flex flex-column">
            <button class="btn small mb-4" :class="gameStateClass" @touchstart="onGameStateControlClick">
              {{gameStateControlText}}
            </button>
             <button class="btn small" @touchstart="showSettings = true; gameState.gameOn = false">
              Settings
            </button>
          </div>
          <j-col>
            <j-row>
              <j-col class="d-flex flex-column align-center">
                <button
                  class="btn large square"
                  @touchstart="$emit('mobileControlDown', 'up')"
                  @touchend="$emit('mobileControlUp', 'up')"
                >
                  &uparrow;
                </button>
              </j-col>

            </j-row>
            <j-row>
              <j-col>
                <button
                  class="btn large square"
                  @touchstart="$emit('mobileControlDown', 'left')"
                  @touchend="$emit('mobileControlUp', 'left')"
                >
                  &leftarrow;
                </button>
                <button
                  class="btn large square"
                  @touchstart="$emit('mobileControlDown', 'down')"
                  @touchend="$emit('mobileControlUp', 'down')"
                >
                  &downarrow;
                </button>
                <button
                  class="btn large square"
                  @touchstart="$emit('mobileControlDown', 'right')"
                  @touchend="$emit('mobileControlUp', 'right')"
                >
                  &rightarrow;
                </button>
              </j-col>
            </j-row>
          </j-col>
        </div>
      </div>

      <MobileSettings
        :gameMode.sync="gameMode"
        :showScore.sync="showScore"
        :snakeSpeed="snakeSpeed"
        @update:snakeSpeed="snakeSpeed.value = $event"
        v-model="showSettings"
      /> 

    </j-col>
  </j-row>
</template>

<script>
import GameWrap from '@/components/game-wrap'
import Snake from '@/components/games/snake/snake'
import MobileSettings from '@/components/games/snake/mobile-settings'

const STORAGE_NAMESPACE = 'snake'

export default {
  inject: ['breakpoint'],
  props: {
    controls: Object,
  },
  components: {
    GameWrap,
    Snake,
    MobileSettings,
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
        return 'primary'
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
