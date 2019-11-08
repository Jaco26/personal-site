<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <component
          :is="selectedGame.component"
          :ref="selectedGame.name"
          :controls="controls"
          @mobileControlDown="onMobileControlDown"
          @mobileControlUp="onMobileControlUp"
        ></component>
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
      return {
        component: this.games[this.$route.params.game],
        name: this.$route.params.game,
      } 
    },
  },
  methods: {
    handleKeyDown(e) {
      this.controls[keyCodeMap[e.keyCode]] = true
    },
    handleKeyUp(e) {
      this.controls[keyCodeMap[e.keyCode]] = false
    },
    onMobileControlDown(val) {
      if (val === 'left') {
        this.controls.arrowLeft = true
      } else if (val === 'up') {
        this.controls.arrowUp = true
      } else if (val === 'right') {
        this.controls.arrowRight = true
      } else if (val === 'down') {
        this.controls.arrowDown = true
      }
    },
    onMobileControlUp(val) {
      if (val === 'left') {
        this.controls.arrowLeft = false
      } else if (val === 'up') {
        this.controls.arrowUp = false
      } else if (val === 'right') {
        this.controls.arrowRight = false
      } else if (val === 'down') {
        this.controls.arrowDown = false
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    document.querySelector('html').style.overflow = 'hidden'
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('keyup', this.handleKeyUp)
    document.querySelector('html').style.overflow = 'auto'
    this.$refs[this.selectedGame.name].reset()
    next()
  }
}
</script>

<style scoped>
.hero-body {
  padding: 0 ;
}
.columns {
   margin: 0
}
</style>