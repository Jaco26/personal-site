<template>
  <b-navbar transparent fixed-top class="is-light has-light-text">
    <template v-slot:brand>
      <b-navbar-item tag="nuxt-link" to="/">
        <h1 class="subtitle is-2">Jacob Albright</h1>
      </b-navbar-item>
    </template>
    <template v-slot:end>
      <b-navbar-item
        v-for="page in pageRoutes"
        :key="page.to"
        :to="page.to"
        tag="nuxt-link"
       >
        {{page.text}}
       </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
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
        }
      ]
    }
  }
}
</script>