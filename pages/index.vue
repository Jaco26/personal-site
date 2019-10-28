<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/games">Games</nuxt-link>
            </div>
            <p>
              Have fun with some classic arcade games I've implemented with my own spin using HTML Canvas and Javascript.
            </p>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/photos">Photos</nuxt-link>
            </div>
            <p>
              There isn't anything here yet...
            </p>
          </div>
        </div>
        <j-row isCentered >
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/blog">"Blog"</nuxt-link>
            </div>
            <p>
              This is where I write my thoughts about things.
            </p>
          </j-col>
          <!-- <div class="column is-two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/blog">"Blog"</nuxt-link>
            </div>
            <p>
              This is where I write my thoughts about things.
            </p>
          </div> -->
        </j-row>
        <!-- <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/blog">"Blog"</nuxt-link>
            </div>
            <p>
              This is where I write my thoughts about things.
            </p>
          </div>
        </div> -->
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