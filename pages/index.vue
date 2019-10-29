<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid content">
        <!-- <j-row centered>
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/games">Games</nuxt-link>
            </div>
            <p>
              Have fun with some classic arcade games I've implemented with my own spin using HTML Canvas and Javascript.
            </p>
            <ul>
              <li>
                <div class="subtitle is-5 has-text-weight-light">
                  <nuxt-link to="/games/snake">Snake</nuxt-link>
                </div>
                Enjoy two modes: "Classic" and "Polluter"!
              </li>
              <li>
                <div class="subtitle is-5 has-text-weight-light">
                  <nuxt-link to="/games/pong">Pong</nuxt-link>
                </div>
              </li>
            </ul>
          </j-col>
        </j-row> -->
        <j-row centered>
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/games/snake">Snake</nuxt-link>
            </div>
            <p>
              Play snake in two modes
            </p>
          </j-col>
        </j-row>
        <j-row centered>
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/games/pong">Pong</nuxt-link>
            </div>
            <p>
              Play co-op Pong.
            </p>
          </j-col>
        </j-row>
        <j-row centered>
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/photos">Photos</nuxt-link>
            </div>
            <p>
              There isn't anything here yet...
            </p>
          </j-col>
        </j-row>
        <j-row centered >
          <j-col size="two-fifths">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/blog">"Blog"</nuxt-link>
            </div>
            <p>
              This is where I write my thoughts about things.
            </p>
          </j-col>
        </j-row>
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

ul {
  list-style: none;
  padding: 0 !important; 
  margin: 0 !important;
}
ul > li {
  margin-left: .6rem !important;
  margin-bottom: .8rem !important;
  /* padding: 0 !important; */
}
</style>