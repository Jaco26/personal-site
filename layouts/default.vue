<template>
  <app-wrap>
    <TheNavbar />
    <main class="container flex fullheight-with-dense-navbar">
      <nuxt />
    </main>
    <TheFooter />
  </app-wrap>
</template>

<script>
import AppWrap from '@/components/app-wrap'
import TheNavbar from '@/components/the-navbar'
import TheFooter from '@/components/the-footer'
export default {
  components: {
    AppWrap,
    TheNavbar,
    TheFooter,
  },
  scrollToTop: true,
}
</script>
