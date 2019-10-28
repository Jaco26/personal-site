

<script>
export default {
  functional: true,
  props: {
    size: String,
  },
  render(h, ctx) {
    const { size } = ctx.props

    const sizeModifiers = size.split(' ').map(x => `is-${x}`).join(' ');

    return h('div',
      {
        class: `column ${sizeModifiers}`
      },
      [
        ctx.slots().default,
      ]
    )
  }
}
</script>