<script>
export default {
  functional: true,
  props: {
    id: String,
  },
  render(h, ctx) {
    // const attrs = {
    //   class: 'base-input',
    // }

    return h('div',
      { ...ctx.data, class: 'base-input' },
      [
        h('label',
          {
            class: 'base-input__label',
            attrs: { for: ctx.props.id }
          },
          ctx.slots().label
        ),
        ctx.scopedSlots.input()
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/helpers/text.scss';
.base-input {
  display: flex;
  flex-direction: column;

  .base-input__label {
    @extend .caption;
    padding-left: .25rem;
    padding-bottom: .125rem; 
  }
}
</style>