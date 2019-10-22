<template>
  <div>
    <canvas ref="gameCanvas" :height="height" :width="width"></canvas>
    <slot v-bind="{ ctx }" />
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
      /** @type {CanvasRenderingContext2D} */
      ctx: null,
    }
  },
  mounted() {
    this.ctx = this.$refs.gameCanvas.getContext('2d')
  }
}
</script>

<style scoped>
canvas {
  border: 1px outset;
}
</style>