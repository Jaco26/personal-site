<template>
  <j-row>
    <j-col class="d-flex justify-center align-center">
      <span class="mr-1">Have you tried these</span>
      <nuxt-link to="/games">Games?</nuxt-link>
    </j-col>
  </j-row>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Home',
      },
      {
        to: '/thoughts',
        text: 'Thoughts',
      }
    ])
  }
}
</script>