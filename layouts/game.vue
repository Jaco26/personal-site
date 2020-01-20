<template>
  <app-wrap>
    <TheNavbar />
    <j-container class="flex fullheight-with-dense-navbar">
      <nuxt />
    </j-container>
  </app-wrap>
</template>

<script>
import AppWrap from '@/components/app-wrap'
import TheNavbar from '@/components/the-navbar'
export default {
  components: {
    AppWrap,
    TheNavbar,
  },
}
</script>