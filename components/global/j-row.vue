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
