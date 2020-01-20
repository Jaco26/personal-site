<template>
  <nuxt-child></nuxt-child>
</template>

<script>
export default {
  scrollToTop: true,
  layout(ctx) {
    if (ctx.params.game) {
      return 'game'
    }
  },
}
</script>