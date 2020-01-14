<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">

        <div class="has-text-centered">
          ... coming soon
        </div>
        
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