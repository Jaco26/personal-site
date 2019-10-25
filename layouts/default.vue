<template>
  <div class="bg">
    <TheNavbar class="bg" />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/the-navbar'
export default {
  components: {
    TheNavbar,
  }
}
</script>

<style scoped>
.bg {
  /* background-color: rgb(186, 245, 201) */
  /* background-color: hsl(157, 62%, 80%) */
  /* background-color: rgba(171, 255, 193, 0.47) */
  background-color: #1a3a42
}
</style>