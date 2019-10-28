<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">

        <div v-if="breakpoint.isMobile" class="columns">
          <div class="column">
            <div class="subtitle is-4 has-text-centered has-text-weight-light">
              <nuxt-link to="/games/snake">Snake</nuxt-link>
            </div>
            <div class="has-text-centered">
              ... more on the way
            </div>
          </div>
          <div class="column">
            <GamesArticle />
          </div>
        </div>

        <div v-else class="columns">
          <div class="column">
            <GamesArticle />
          </div>
          <div class="column">
            <div class="subtitle is-4 has-text-centered has-text-weight-light">
              <nuxt-link to="/games/snake">Snake</nuxt-link>
            </div>
            <div class="subtitle is-4 has-text-centered has-text-weight-light">
              <nuxt-link to="/games/pong">Pong</nuxt-link>
            </div>
            <div class="has-text-centered">
              ... more on the way
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import GamesArticle from '@/components/games-article'
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
  components: {
    GamesArticle,
  },
  inject: ['breakpoint'],
}
</script>