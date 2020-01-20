<template>
  <j-row>
    <j-col class="d-flex flex-column">

      <section class="toolbar dense flat bg-light--darker">
        <div class="toolbar-actions">
          <j-row class="align-center">
            <j-col>
              <button class="btn small primary" @click="onGameStateControlClick">
                {{gameStateControlText}}
              </button>
            </j-col>
            <j-col class="d-flex justify-end align-center">
              <div class="px-4">
                <j-slider
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
          </j-row>
        </div>
      </section>
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
    gameStateControlText() {
      return 'Hey Babe'
    },
  },
  methods: {
    onGameStateControlClick() {

    },
    saveSettings() {
      localStorage.setItem(STORAGE_NAMESPACE, JSON.stringify({
        showScore: this.showScore,
        gameMode: this.gameMode,
        snakeSpeed: this.snakeSpeed,
      }))
    },
    loadSettings() {
      let saved = localStorage.getItem(STORAGE_NAMESPACE)
      if (saved) {
        saved = JSON.parse(saved)
        this.showScore = saved.showScore
        this.gameMode = saved.gameMode
        this.snakeSpeed.value = saved.snakeSpeed.value
      }
    }
  },
}
</script>

<style lang="scss">
@import 'assets/style/_variables.scss';
@import 'assets/style/tools/mixins.scss';
.toolbar {
  padding: 0 1.25rem;
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
    justify-content: center;

    // flex: 1;
  }
}

</style>