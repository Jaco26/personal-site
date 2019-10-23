<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <b-modal :active.sync="active" :canCancel="['escape', 'x']">
          <div class="card is-narrow">
            <div class="card-content">
              <component
                :is="selectedGame"
                :dimensions="dimensions"
                :controls="controls"
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
  80: 'p', // pause
  79: 'o', // resume
}
export default {
  data() {
    return {
      active: false,
      games: {
        snake: SnakeGame,
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
        p: false, // pause
        o: false, // resume
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