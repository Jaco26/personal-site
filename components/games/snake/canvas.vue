<template>
  <div>
    <canvas ref="theCanvas" :height="height" :width="width"></canvas>
    <slot v-bind="{ ctx }"></slot>
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
      ctx: null,
    }
  },
  mounted() {
    this.ctx = this.$refs.theCanvas.getContext('2d')
  },
}
</script>

<style scoped>
canvas {
  /* background-color: aquamarine; */
  border: 1px outset
}
</style>