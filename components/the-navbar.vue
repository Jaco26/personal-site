<template>
  <div class="navbar dense">
    <nav>
      <div class="navbar-title">
        <nuxt-link to="/">jacobsalright</nuxt-link>
      </div>
      <ul class="navbar-links">
        <li v-for="(crumb, i) in $store.state.breadcrumbs.slice().reverse()" :key="i" class="navbar-link">
          <span class="navbar-link__seperator" v-if="i > 0">&leftarrow;</span>
          <nuxt-link exact :to="crumb.to">{{crumb.text}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- <div class="navbar-wrapper dense">
    <nav class="navbar dense">
      <div class="navbar-title">
        <nuxt-link to="/">jacobsalright</nuxt-link>
      </div>
      <ul class="navbar-links">
        <li v-for="(crumb, i) in $store.state.breadcrumbs.slice().reverse()" :key="i" class="navbar-link">
          <span class="navbar-link__seperator" v-if="i > 0">&rightarrow;</span>
          <nuxt-link exact :to="crumb.to">{{crumb.text}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div> -->
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