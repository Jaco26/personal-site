<script>
export default {
  functional: true,
  props: {
    centered: Boolean,
    vCentered: Boolean,
    multiline: Boolean,
  },
  render(h, ctx) {
    const { centered, vCentered, multiline } = ctx.props

    let classes = 'columns'
    if (centered) classes += ' is-centered'
    if (vCentered) classes += ' is-vcentered'
    if (multiline) classes += ' is-multiline'

    return h('div', 
      {
        class: classes
      },
      [
        ctx.slots().default
      ]
    )
  }
}
</script>