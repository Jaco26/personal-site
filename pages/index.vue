<template>
  <div class="row wrap justify-center">
    <div class="col mobile-12 tablet-12 desktop-6" style="height: 100%">
      <article class="card flat mb-4 my-4 pa-0 ">
        <div class="card-title">
          But who <span style="margin-right: .25rem"><em>is</em></span> Jacob?
        </div>
        <div class="card-text">
          Jacob is a sociology major turned programmer.
        </div>
      </article> 
    </div>
    <div class="col desktop-6">
      <nuxt-link class="card outlined pa-0 my-4 text-dark" to="/games">
        <div class="card-title text-purple pb-0">
          Games
        </div>
        <div class="card-text">
          Have fun with some classic arcade games I've implemented with my own spin using
          HTML Canvas and Javascript.
        </div>
      </nuxt-link>

      <nuxt-link class="card outlined pa-0 mb-4 text-dark" to="/photos">
        <div class="card-title text-purple pb-0">
          Photos
        </div>
        <div class="card-text">
          There isn't anything here yet ...
        </div>
      </nuxt-link>

      <nuxt-link class="card outlined pa-0 mb-4 text-dark" to="/thoughts">
        <div class="card-title text-purple pb-0">
          Thoughts
        </div>
        <div class="card-text">
          This is where I write my thoughts about things.
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
      }
    ])
  },
}
</script>