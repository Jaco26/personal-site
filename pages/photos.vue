<template>
  <j-row>
    <j-col class="d-flex justify-center align-center">
      Darn! None yet ...
    </j-col>
  </j-row>
</template>

<script>
export default {
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

