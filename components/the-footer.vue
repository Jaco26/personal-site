<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="columns">
        <div class="column">
          <footer-link
            v-for="link in pageLinks"
            :key="link.href"
            v-bind="link"
          >
            <template v-slot:text>
              <h3 class="subtitle has-text-light">{{link.text}}</h3>
            </template>
          </footer-link>
        </div>
        <div class="column is-one-third">
          <h3 class="subtitle has-text-light">Contact</h3>
          <FooterLink
            v-for="link in socialLinks"
            :key="link.href"
            v-bind="link"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLink from '@/components/footer-link'
export default {
  components: {
    FooterLink,
  },
  computed: {
    pageLinks() {
      return [
        {
          tag: 'nuxt-link',
          to: '/photos',
          icon: 'photos',
          text: 'Photos'
        },
        {
          tag: 'nuxt-link',
          to: '/games',
          icon: 'games',
          text: 'Games'
        },
      ]
    },
    socialLinks() {
      return [
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
