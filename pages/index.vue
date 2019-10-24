<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">

        <ul>
          <li class="subtitle is-4 has-text-centered has-text-weight-light">
            <nuxt-link to="/games">Games</nuxt-link>
          </li>
           <li class="subtitle is-4 has-text-centered has-text-weight-light">
            <nuxt-link to="/photos">Photos</nuxt-link> 
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
      }
    ])
  },
}
</script>

<style scoped>
.with-henrys-fork {
  background-image: url('~assets/img/river-and-tetons.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>