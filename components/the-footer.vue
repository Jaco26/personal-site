<template>
  <footer>
    This is the new footer
  </footer>
  <!-- <footer class="footer has-background-velvet">
    <div class="container">
      <j-row>
        
        <j-col>
          <h3 class="subtitle is-4">Pages</h3>
          <template v-for="link in pageLinks">
            <div :key="link.to">
              <nuxt-link class="footer-link" :to="link.to">
                <span>{{link.text}}</span> 
              </nuxt-link>
            </div>
          </template>
        </j-col>
        
        <j-col>
          <h3 class="subtitle is-4">Contact</h3>
          <template v-for="link in contactLinks">
            <div :key="link.href">
              <a class="footer-link" :href="link.href">
                <b-icon :icon="link.icon"></b-icon>
                <span class=""> {{link.text}} </span>
              </a>
            </div>
          </template>
        </j-col>
        <j-col>
          <div>
            This site is built with <a style="margin: 0" href="https://nuxtjs.org/"> Nuxt.js</a> and <a style="margin: 0" href="https://buefy.org/">Buefy</a> and is written and maintained by Jacob Albright.
          </div>
          <br>
          <div>
            © {{currentYear}} Jacob Albright. All Rights Reserved.
          </div>
        </j-col>
      </j-row>
    </div>
  </footer> -->
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
          to: '/thoughts',
          text: 'Thoughts'
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
  },
  computed: {
    currentYear() {
      return new Date().toDateString().slice(-4)
    }
  }
}
</script>
