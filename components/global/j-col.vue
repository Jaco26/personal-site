

<script>
export default {
  functional: true,
  render(h, ctx) {
    return h('div',
      {
        class: `col ${ctx.data.staticClass || ''}`,
        style: `${ctx.data.style || ''} ${ctx.data.staticStyle}`.trim()
      },
      [
        ctx.slots().default,
      ]
    )
  }
}
</script>
