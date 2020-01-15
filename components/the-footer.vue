<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <span v-for="link in contactLinks" :key="link.href" class="mx-4">
            <a :href="link.href" class="text-light text-underline">{{link.text}}</a>
          </span>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col text-center">
          © {{currentYear}} Jacob Albright. All Rights Reserved
        </div>
      </div>
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
