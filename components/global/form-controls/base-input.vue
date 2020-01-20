<script>
export default {
  functional: true,
  props: {
    label: String,
    id: String,
  },
  render(h, ctx) {
    return h('div',
      { ...ctx.data, class: 'base-input' },
      [
        h('label',
          {
            class: 'base-input__label',
            attrs: { for: ctx.props.id }
          },
          ctx.slots().label || ctx.props.label
        ),
        h('div',
          {
            class: 'base-input__input-wrap'
          },
          ctx.slots().input
        ),
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
  height: 2.5rem;

  .base-input__label {
    @extend .caption;
    padding-left: .25rem;
    padding-bottom: .125rem; 
  }

  .base-input__input-wrap {

  }
}
</style>