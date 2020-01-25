<template>
  <div>
    <canvas ref="gameCanvas" :height="dimensions.height" :width="dimensions.width"></canvas>
    <slot v-if="!!ctx" v-bind="{ ctx, keyboard, dimensions }" />
  </div>
</template>

<script>

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
  inject: ['breakpoint'],
  data() {
    return {
      ctx: null,
      keyboard: {
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
  mounted() {
    this.ctx = this.$refs.gameCanvas.getContext('2d')
    document.addEventListener('keydown', this.onKeydown)
    document.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown)
    document.removeEventListener('keyup', this.onKeyup)
  },
  computed: {
    dimensions() {
      const rv = {
        width: 0,
        height: 0,
        nCols: 0,
        nRows: 0
      }
      if (this.breakpoint.isMobile) {
        rv.width = 288
        rv.height = 360
        rv.nCols = 32
        rv.nRows = 40
      } else if (this.breakpoint.isTablet) {
        rv.width = 720
        rv.height = 480
        rv.nCols = 60
        rv.nRows = 40
      } else {
        rv.width = 900
        rv.height = 600
        rv.nCols = 60
        rv.nRows = 40
      }
      return rv
    },
    snakeOptions() {
      const startPosition = {
        col: 0,
        row: 0,
      }
      if (this.breakpoint.isMobile) {
        startPosition.col = 14
        startPosition.row = 9
      } else if (this.breakpoint.isTablet) {
        startPosition.col = 20
        startPosition.row = 13
      } else {
        startPosition.col = 29
        startPosition.row = 19
      }
      return startPosition
    }
  },
  methods: {
    onKeydown(e) {
      this.keyboard[keyCodeMap[e.keyCode]] = true
    },
    onKeyup(e) {
      this.keyboard[keyCodeMap[e.keyCode]] = false
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
  }
}
</script>