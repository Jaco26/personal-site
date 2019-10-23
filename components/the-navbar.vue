<template>
  <b-navbar transparent fixed-top>
    <template v-slot:brand>
      <b-navbar-item tag="nuxt-link" to="/">
        <h1 class="subtitle is-3">Jacob Albright</h1>
      </b-navbar-item>
    </template>
    <!-- <template v-slot:end>
      <b-navbar-item
        v-for="page in pageRoutes"
        :key="page.to"
        :to="page.to"
        tag="nuxt-link"
       >
        {{page.text}}
       </b-navbar-item>
    </template> -->
  </b-navbar>
</template>

<script>
import FooterLink from '@/components/footer-link'
export default {
  components: {
    FooterLink,
  },
  data() {
    return {
      pageRoutes: [
        {
          to: '/photos',
          text: 'Photos'
        },
        {
          to: '/games',
          text: 'Games'
        },
      ],
      contactLinks: [
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