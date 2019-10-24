<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">

        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <p class="title has-text-weight-light">
              <nuxt-link to="/games">Games</nuxt-link>
            </p>
            <p class="title has-text-weight-light">
              <nuxt-link to="/photos">Photos</nuxt-link> 
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import FooterLink from '@/components/footer-link'
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob'
      }
    ])
  },
  components: {
    FooterLink,
  },
  data() {
    return {
      socialLinks: [
        {
          href: 'mailto:jacob.albright23@gmail.com',
          text: 'Email',
          icon: 'email',
        },
        {
          href: 'https://github.com/jaco26',
          text: 'Github',
          icon: 'github-box',
        },
        {
          href: 'https://www.linkedin.com/in/jacob-albright-6b810815b/',
          text: 'Linkedin',
          icon: 'linkedin-box'
        }
      ]
    }
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