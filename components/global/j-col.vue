

<script>
export default {
  functional: true,
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  render(h, ctx) {
    const { size } = ctx.props

    const sizeModifiers = size.split(' ').map(x => `is-${x}`).join(' ');

console.log(ctx.data)

    return h('div',
      {
        class: `column ${sizeModifiers} ${ctx.data.staticClass}`,
      },
      [
        ctx.slots().default,
      ]
    )
  }
}
</script>