<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-fifths">
            <h1 class="title">Welcome</h1>
            <h3 class="subtitle">I'm so glad you're here</h3>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <div class="subtitle is-4 has-text-weight-light">
                  <nuxt-link to="/games">Games</nuxt-link>
                </div>
                <p>
                  Have fun with some classic arcade games I've implemented with my own spin using HTML Canvas and Javascript.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="subtitle is-4 has-text-weight-light">
                  <nuxt-link to="/photos">Photos</nuxt-link>
                </div>
                <p>
                  There isn't anything here yet...
                </p>
              </div>
            </div>
          </div>
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
        text: 'Jacob'
      }
    ])
  },
}
</script>

<style scoped>
.welcome {
  /* display: inline-flex; */
  align-items: flex-start !important
}
</style>