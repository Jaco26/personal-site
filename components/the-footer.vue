<template>
  <!-- <footer class="footer has-background-grey-lighter"> -->
  <footer class="footer has-background-velvet">
    <div class="container">
      <j-row>
        <j-col>
          <h3 class="subtitle is-4">Pages</h3>
          <template v-for="link in pageLinks">
            <div :key="link.to">
              <nuxt-link :to="link.to">
                <span>{{link.text}}</span> 
              </nuxt-link>
            </div>
          </template>
        </j-col>
        <j-col></j-col>
        <j-col>
          <h3 class="subtitle is-4">Contact</h3>
          <template v-for="link in contactLinks">
            <div :key="link.href">
              <a :href="link.href">
                <b-icon :icon="link.icon"></b-icon>
                <span class=""> {{link.text}} </span>
              </a>
            </div>
          </template>
        </j-col>
      </j-row>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      pageLinks: [
        {
          to: '/games',
          text: 'Games'
        },
        {
          to: '/photos',
          text: 'Photos',
        },
        {
          to: '/blog',
          text: 'Blog'
        },
      ],
      contactLinks: [
        {
          href: 'https://github.com/jaco26',
          text: 'Github',
          icon: 'github-box',
        },
        {
          href: 'https://www.linkedin.com/in/jacob-albright-6b810815b/',
          text: 'Linkedin',
          icon: 'linkedin-box'
        },
        {
          href: 'mailto:jacob.albright23@gmail.com',
          text: 'Email',
          icon: 'email',
        },
      ]
    }
  }
}
</script>

<style scoped>
a {
  display: inline-flex;
  /* color: #555; */
  color: #ccc;
  margin: 0 0 1rem 0;
}
a:hover {
  /* color: #222 */
  color: #eee
}
a > span {
  margin-right: .4rem;
}
h3 {
  color: #ddd;
}
</style>