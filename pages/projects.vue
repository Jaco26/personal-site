<template>
  <j-row>
    <j-col class="d-flex justify-center align-center">
      <span class="mr-1">
        This is like my
      </span>
      <nuxt-link to="/photos">photos</nuxt-link>
      <span class="ml-1">
        page.
      </span> 
    </j-col>
  </j-row>
</template>

<script>
export default {
  scrollToTop: true,
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Home'
      },
      {
        to: '/projects',
        text: 'Projects'
      },
    ])
  },
}
</script>

