<template>
  <div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  layout(ctx) {
    if (ctx.params.game) {
      return 'game'
    }
  },
}
</script>