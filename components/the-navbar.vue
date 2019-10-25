<template>
  <b-navbar transparent fixed-top class="is-velvet">
   <template v-slot:brand>
      <TheBreadcrumbs />
    </template>
    <template v-slot:end>
      <b-navbar-dropdown class="contact-dropdown" hoverable right arrowless>
        <template v-slot:label>
          <span>Contact</span>
        </template>
        <template v-for="link in contactLinks">
          <b-navbar-item :key="link.text" :href="link.href" class="contact-link">
            <b-icon :icon="link.icon"></b-icon>
            <span>{{link.text}}</span>
          </b-navbar-item>
        </template>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
import TheBreadcrumbs from '@/components/the-breadcrumbs'
export default {
  components: {
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

<style scoped>
.contact-dropdown {
  margin: 0 8px;
}
.contact-link {
  color: #555;
}
.contact-link:hover {
  color: #222;
}
.contact-link > span {
  margin: 0 .2rem;
}
</style>