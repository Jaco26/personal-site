<template>
  <div>
    <canvas ref="gameCanvas" :height="dimensions.height" :width="dimensions.width"></canvas>
    <slot v-bind="{ hasCtx, dimensions, snakeSetup }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctxProvider: {
        /** @type {CanvasRenderingContext2D} */
        ctx: null
      },
    }
  },
  inject: ['windowSize', 'breakpoint'],
  provide() {
    return {
      ctxProvider: this.ctxProvider
    }
  },
  mounted() {
    this.ctxProvider.ctx = this.$refs.gameCanvas.getContext('2d')
  },
  computed: {
    hasCtx() {
      return !!this.ctxProvider.ctx
    },
    dimensions() {
      const rv = {
        width: 0,
        height: 0,
        nCols: 0,
        nRows: 0
      }
      if (this.breakpoint.isMobile) {
        rv.width = 390
        rv.height = 260
        // rv.nCols = 30
        // rv.nRows = 20
        rv.nCols = 42
        rv.nRows = 28
      } else if (this.breakpoint.isTablet) {
        rv.width = 600
        rv.height = 400
        // rv.nCols = 42
        // rv.nRows = 28
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
    snakeSetup() {
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
  }
}
</script>