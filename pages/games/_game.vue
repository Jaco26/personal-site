<template>
  <section class="hero is-white is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <b-modal :active.sync="active" :canCancel="['escape', 'x']">
          <div class="card">
            <div class="card-content">
              <div class="columns is-centered">
                <div class="column">
                  <button @click="gameState.gameOn = !gameState.gameOn">{{gameState.gameOn ? 'Pause' : 'Start'}}</button>
                  <button @click="gameState.gameOver = !gameState.gameOver">{{gameState.gameOver ? 'Reset' : 'Game Over'}}</button>
                </div>
              </div>
              <component
                :is="selectedGame"
                :dimensions="dimensions"
                :controls="controls"
                :gameState="gameState"
              ></component>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </section>
</template>

<script>
import SnakeGame from '@/components/games/snake'
const keyCodeMap = {
  37: 'arrowLeft',
  38: 'arrowUp',
  39: 'arrowRight',
  40: 'arrowDown',
  65: 'a',
  87: 'w',
  68: 'd',
  83: 's',
}
export default {
  data() {
    return {
      active: false,
      games: {
        snake: SnakeGame,
      },
      gameState: {
        gameOn: false,
        gameOver: false,
        gameScore: 0,
      },
      dimensions: {
        width: 900,
        height: 600,
        nRows: 40,
        nCols: 60,
      },
      controls: {
        arrowLeft: false,
        arrowUp: false,
        arrowRight: false,
        arrowDown: false,
        a: false, // left
        w: false, // up
        d: false, // right
        s: false, // down
      }
    }
  },
  computed: {
    selectedGame() {
      return this.games[this.$route.params.game]
    }
  },
  methods: {
    handleKeyDown(e) {
      this.controls[keyCodeMap[e.keyCode]] = true
    },
    handleKeyUp(e) {
      this.controls[keyCodeMap[e.keyCode]] = false
    }
  },
  watch: {
    active(val) {
      if (!val) {
        this.$router.push('/games')
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('keyup', this.handleKeyUp)
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.active = true;
    })
  }
}
</script>