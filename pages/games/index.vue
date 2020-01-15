<template>
  <div class="row wrap justify-center align-center">
    <div class="col tablet-10 desktop-8 tv-6">
      <nuxt-link class="card outlined pa-0 mb-4 text-dark" to="/games/snake">
        <div class="card-title text-purple pb-0">
          Snake
        </div>
        <div class="card-text ">
          <p class="mt-0">
            How long can you balance the snake's insatiable hunger? How long can you grow before you become just too long?
          </p>
        </div>
      </nuxt-link>

      <nuxt-link class="card outlined pa-0 mb-4 text-dark" to="/games/pong">
        <div class="card-title text-purple pb-0">
          Pong
        </div>
        <div class="card-text">
          <p class="mt-0">
            Grab a friend or move both paddles yourself to play this co-op version of Pong.
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
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
        to: '/games',
        text: 'Games'
      },
    ])
  },
  methods: {
    doIT() {
      console.log('doing it')
    }
  }
}
</script>