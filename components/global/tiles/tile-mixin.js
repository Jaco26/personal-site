export default {
  inheritAttrs: false,
  computed: {
    classes() {
      return Object.keys(this.$attrs).join(' ')
    }
  } 
}