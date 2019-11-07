<template>
  <div>
    <canvas ref="gameCanvas" :height="height" :width="width"></canvas>
    <slot v-bind="{ hasCtx }" />
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number,
  },
  data() {
    return {
      // if you observed objects to provider, the provided properties will be reactive...
      // this is necessary for child components to be able to use ctx
      ctxProvider: {
        /** @type {CanvasRenderingContext2D} */
        ctx: null,
      }
    }
  },
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
      return !!this.ctxProvider.ctx;
    }
  }
}
</script>

<style scoped>
canvas {
  /* border: 1px outset; */
}
</style>