<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        This is the photos page
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob'
      },
      {
        to: '/photos',
        text: 'Photos'
      },
    ])
  },
}
</script>