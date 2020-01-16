<template>
  <footer class="footer">
    <j-container>
      <j-row>
        <j-col class="text-center">
          <span v-for="link in contactLinks" :key="link.href" class="mx-4">
            <a :href="link.href" class="text-light text-underlined">{{link.text}}</a>
          </span>
        </j-col>
      </j-row>
      <j-row class="pt-4">
        <j-col class="text-light text-center">
          © {{currentYear}} Jacob Albright. All Rights Reserved
        </j-col>
      </j-row>
    </j-container>
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
          href: 'mailto:jacob.albright23@gmail.com?subject=I was looking at your website',
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
