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

<style lang="scss">
@import '~assets/style/variables.scss';

.container {
  display: block;
  width: 100%;
  padding: 0 .5rem;

  &.flex {
    display: flex;
    flex-direction: column;
  }
}

.fullheight {
  min-height: 100%;
}
.fullheight-with-navbar {
  min-height: calc(100% - #{$navbar-height});
}
.fullheight-with-dense-navbar {
  min-height: calc(100% - #{$navbar-dense-height});
}

</style>