<template>
  <j-row class="justify-center align-center">

    <article class="modal" v-if="showModal">
      <j-container class="fullheight flex">
        <j-row>
          <j-col class="d-flex justify-center align-center">
            <section class="modal-content">
              <div class="card">
                <div class="card-title">
                  I'm working on site renovations so the game controls look pretty ugly right now.
                </div>
                <div class="card-title">
                  Hit the "r" to start/resume a game and "p" to pause
                </div>
                <div class="card-actions text-right">
                  <button class="btn primary" @click="showModal = false">Ok</button>
                </div>
              </div>
            </section>
          </j-col>
        </j-row>
      </j-container>
    </article>
    
    <j-col class="mobile-12 tablet-10">
      
      <component
        :is="selectedGame.component"
        :ref="selectedGame.name"
        :controls="controls"
        @mobileControlDown="onMobileControlDown"
        @mobileControlUp="onMobileControlUp"
      ></component>
    </j-col>
  </j-row>
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
        text: 'Home',
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
      showModal: true,
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
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000a;
  z-index: 3;
}
.modal-content {
  position: relative;
  top: -20%;
  z-index: 4;
  background: white;
}
</style>