

<script>
export default {
  functional: true,
  render(h, ctx) {
    return h('div',
      {
        class: `col ${ctx.data.staticClass || ''}`,
      },
      [
        ctx.slots().default,
      ]
    )
  }
}
</script>
