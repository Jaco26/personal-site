

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

<style lang="scss" scoped>
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding: 0 .5rem;
}

$num-cols: 12;
$current-col: 1;
@while $current-col <= $num-cols {
  .col-#{$current-col} {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 percentage($current-col / $num-cols);
    max-width: percentage($current-col / $num-cols);
  }
  $current-col: $current-col + 1;
}
</style>