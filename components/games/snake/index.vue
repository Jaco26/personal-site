<template>
  <div>
    <div class="columns is-centered is-flex-mobile">
      <div class="column is-narrow is-narrow is-narrow-mobile">
        <div v-if="breakpoint.aboveMobile" class="columns level" style="margin: 0">
          <div class="column ctrl-col">
            <b-button @click="onGameStateControlClick">
              {{gameStateControlText}}
            </b-button>
          </div>

          <div class="column ctrl-col">
            <!-- This is a spacer and it prevents other elements from shifting
            when gameStateControlText changes length -->
          </div>

          <div class="column ctrl-col">
            <b-field class="is-marginless" label="Game Mode"></b-field>
            <b-select
              expanded 
              ref="gameModeSelect" 
              size="is-small" 
              placeholder="Select a game mode"
              v-model="gameMode"
              @change.native="$event => $event.target.blur()"
            >
              <option value="classic">Classic</option>
              <option value="polluter">Polluter</option>
            </b-select>
          </div>

          <div class="column ctrl-col">
            <b-field class="is-marginless" label="Snake Speed"></b-field>
            <b-slider :min="snakeSpeed.min" :max="snakeSpeed.max" v-model="snakeSpeed.value">
              <b-slider-tick v-for="n in [1,2,3,4,5,6,7]" :key="n" :value="n">{{n}}</b-slider-tick>
            </b-slider>
          </div>

          <div class="column is-narrow ctrl-col-end">
            <b-field class="is-marginless" label="Show Score"></b-field>
            <b-switch style="margin-top: .2rem" :rounded="false" v-model="showScore"></b-switch>
          </div>
        </div>

        <!-- <div v-else class="columns level" style="margin: 0">
          <div class="column ctrl-col">
            <b-button @click="onGameStateControlClick">
              {{gameStateControlText}}
            </b-button>
          </div>
        </div> -->

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

        <div v-if="breakpoint.isMobile">
          <div class="columns is-flex-mobile is-marginless">
            <div class="column ctrl-col">
              <b-button class="is-block-mobile" @click="onGameStateControlClick">
                {{gameStateControlText}}
              </b-button>
              <b-button @click="showSettings = true">Settings</b-button>
            </div>

            <div class="column is-narrow-mobile ctrl-col-end">
              <div class="columns is-marginless is-centered is-flex-mobile">
                <div class="column is-narrow-mobile is-marginless is-paddingless">
                  <b-button
                    size="is-large"
                    @touchstart.native="$emit('mobileControlDown', 'up')"
                    @touchend.native="$emit('mobileControlUp', 'up')"
                  >
                    <b-icon icon="menu-up"></b-icon>
                  </b-button>
                </div>
              </div>
              <div class="columns is-marginless is-centered is-flex-mobile">
                <div class="column is-marginless is-paddingless is-narrow-mobile">
                  <b-button
                    size="is-large"
                    @touchstart.native="$emit('mobileControlDown', 'left')"
                    @touchend.native="$emit('mobileControlUp', 'left')"
                  >
                    <b-icon icon="menu-left"></b-icon>
                  </b-button>
                  <b-button
                    size="is-large"
                    @touchstart.native="$emit('mobileControlDown', 'down')"
                    @touchend.native="$emit('mobileControlUp', 'down')"
                  >
                    <b-icon icon="menu-down"></b-icon>
                  </b-button>
                  <b-button
                    size="is-large"
                    @touchstart.native="$emit('mobileControlDown', 'right')"
                    @touchend.native="$emit('mobileControlUp', 'right')"
                  >
                    <b-icon icon="menu-right"></b-icon>
                  </b-button>
                </div>
              </div>
            </div>
          </div>

          <TheMobileSettingsModal
            :showSettings.sync="showSettings"
            :gameMode.sync="gameMode"
            :showScore.sync="showScore"
            :snakeSpeed="snakeSpeed"
            @update:snakeSpeed="snakeSpeed.value = $event"
          />

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'
import TheMobileSettingsModal from '@/components/games/snake/the-mobile-settings-modal'

const STORAGE_NAMESPACE = 'snake'

export default {
  inject: ['breakpoint'],
  props: {
    controls: Object,
  },
  components: {
    GameCanvas,
    Snake,
    TheMobileSettingsModal,
  },
  data() {
    return {
      showSettings: false,
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
  }
}
</script>

<style scoped>
.ctrl-col {
  padding-left: 0;
  padding-top: 0;
  padding-bottom: .2rem;
  padding-right: 2rem;
  /* margin-right: 1rem; */
}
.ctrl-col-end {
  padding: 0;
  /* padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0 !important; */
}
.b-slider {
  margin-bottom: 1.2rem;
  margin-top: .3rem;
}
</style>