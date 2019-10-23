<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-fluid">
        
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <p>
              <nuxt-link class="title has-text-weight-light" to="/games">Games</nuxt-link> 
            </p>
            <p>
              <nuxt-link class="title has-text-weight-light" to="/photos">Photos</nuxt-link> 
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>
.with-henrys-fork {
  background-image: url('~assets/img/river-and-tetons.png');
  background-repeat: no-repeat;
  background-size: cover;
}
p {
  margin: 2rem
}
</style>