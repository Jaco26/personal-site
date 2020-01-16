<template>
  <j-row>
    <j-col class="bg-light--darker">
      <article class="card flat">
        <div class="card-text">
          Hello this is the card text
        </div>
      </article>
    </j-col>
    <j-col class="bg-dark--darker d-flex px-4 flex-column justify-center">
      <nuxt-link class="card flat pa-0 my-4 text-light" to="/games">
        <div class="card-title text-light text-underline pb-0">
          Games
        </div>
        <div class="card-text">
          Have fun with some classic arcade games I've implemented with my own spin using
          HTML Canvas and Javascript.
        </div>
      </nuxt-link>
      <nuxt-link class="card flat pa-0 mb-4 text-light" to="/photos">
        <div class="card-title text-light text-underline pb-0">
          Photos
        </div>
        <div class="card-text">
          There isn't anything here yet ...
        </div>
      </nuxt-link>
      <nuxt-link class="card flat pa-0 mb-4 text-light" to="/thoughts">
        <div class="card-title text-light text-underline pb-0">
          Thoughts
        </div>
        <div class="card-text">
          This is where I write my thoughts about things.
        </div>
      </nuxt-link>
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
      }
    ])
  },
}
</script>