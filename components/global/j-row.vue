<script>
export default {
  functional: true,
  render(h, ctx) {
    return h('div', 
      {
        class: `row ${ctx.data.staticClass || ''}`
      },
      [
        ctx.slots().default
      ]
    )
  }
}
</script>

<style lang="scss">
.row {
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin: 0 -.5rem;
}
</style>