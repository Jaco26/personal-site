<template>
<section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns is-centered">
          <div class="column is-narrow">
            <component
              :is="selectedGame"
              :dimensions="dimensions"
              :controls="controls"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SnakeGame from '@/components/games/snake'
import PongGame from '@/components/games/pong'
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
  82: 'r', // resume
}
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob',
      },
      {
        to: '/games',
        text: 'Games',
      },
      {
        to: `/games/${ctx.params.game}`,
        text: ctx.params.game[0].toUpperCase() + ctx.params.game.slice(1).toLowerCase(),
      }
    ])
  },
  data() {
    return {
      games: {
        snake: SnakeGame,
        pong: PongGame,
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
        r: false, // resume
      }
    }
  },
  computed: {
    selectedGame() {
      return this.games[this.$route.params.game]
    },
  },
  methods: {
    handleKeyDown(e) {
      this.controls[keyCodeMap[e.keyCode]] = true
    },
    handleKeyUp(e) {
      this.controls[keyCodeMap[e.keyCode]] = false
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('keyup', this.handleKeyUp)
    document.querySelector('html').style.overflow = 'auto'
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.active = true;
      window.scrollTo(0, 0)
      document.querySelector('html').style.overflow = 'hidden'
    })
  }
}
</script>

