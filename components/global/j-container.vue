<script>
export default {
  functional: true,
  render(h, ctx) {
    return h('div',
      {
        class: `container ${ctx.data.staticClass || ''}`
      },
      [
        ctx.slots().default
      ]
    )
  }
}
</script>
