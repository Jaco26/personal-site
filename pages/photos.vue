<template>
  <j-row>
    <j-col class="d-flex justify-center align-center">
      Darn! Nothing yet ...
    </j-col>
  </j-row>
</template>

<script>
export default {
  scrollToTop: true,
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Home'
      },
      {
        to: '/photos',
        text: 'Photos'
      },
    ])
  },
}
</script>

