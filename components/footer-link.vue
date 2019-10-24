<script>
export default {
  functional: true,
  props: {
    to: String,
    href: String,
    icon: String,
    text: {
      type: String,
      required: true,
    },
  },
  render(h, ctx) {
    const { href, to, text, icon } = ctx.props
   
    const tag = href ? 'a' : 'nuxt-link'
    const data = {
      attrs: href ? { href } : {},
      props: to ? { to } : {},
      class: 'footer-link level',
    }
    const bIcon = icon ? h('b-icon', { props: { icon }, class: 'footer-link-icon' }) : null
    const textSlot = ctx.slots().text || text

    return h(tag, data, [bIcon, textSlot])
  }
}
</script>

<style scoped>
.footer-link {
  /* display: block; */
  margin: .4rem;
  color: #555;
}
.footer-link:hover {
  /* color: #fff; */
  color: #333
}
.footer-link-icon {
  margin-right: .4rem;
}
</style>