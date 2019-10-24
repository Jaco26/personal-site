<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        This is the games index page
        <ul>
          <li>
            <nuxt-link to="/games/snake">Snake</nuxt-link>
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