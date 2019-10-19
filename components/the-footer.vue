<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="columns">
        <div class="column ">
          
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


<style scoped>
/* 
  .bottom-footer will keep footer on bottom of page if elements above it don't
  fill viewport height
*/
.bottom-footer {
  position: absolute;
  bottom: 0;
  width: 100%
}
</style>