<template>
  <b-navbar transparent fixed-top>
    <template v-slot:brand>
      <b-navbar-item tag="div">
        <TheBreadcrumbs />
      </b-navbar-item>
    </template>

    <!-- <template v-slot:end>
      <FooterLink
        v-for="link in contactLinks"
        :key="link.text"
        v-bind="link"
      />
    </template> -->
  </b-navbar>
</template>

<script>
import FooterLink from '@/components/footer-link'
import TheBreadcrumbs from '@/components/the-breadcrumbs'
export default {
  components: {
    FooterLink,
    TheBreadcrumbs,
  },
  data() {
    return {
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