<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        
        <ul>
          <li class="subtitle is-4 has-text-centered has-text-weight-light">
            <nuxt-link to="/games/snake">Snake</nuxt-link>
          </li>
          <li class="has-text-centered">
            ... more on the way
          </li>
        </ul>
        
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
        to: '/games',
        text: 'Games'
      },
    ])
  },
}
</script>