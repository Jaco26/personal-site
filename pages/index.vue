<template>
  <div class="row wrap justify-center align-center">
    <div class="col tablet-10 desktop-8 tv-6" >
      <article class="card flat">
        <div class="card-title">
          Check out what I got
        </div>
        <div class="card-text">
          <ul class="list">
            <li>
              <nuxt-link to="/games">Games</nuxt-link>
              <p class="mt-1">
                Have fun with some classic arcade games I've implemented with my own spin using
                HTML Canvas and Javascript.
              </p>
            </li>
            <li>
              <nuxt-link to="/photos">Photos</nuxt-link>
              <p class="mt-1">
                There isn't anything here yet ...
              </p>
            </li>
            <li>
              <nuxt-link to="/thoughts">Thoughts</nuxt-link>
              <p class="mt-1">
                This is where I write my thoughts about things.
              </p>
            </li>
          </ul>
        </div>
      </article>
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