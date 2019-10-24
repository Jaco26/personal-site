<template>
  <div>
    <TheNavbar />
    <nuxt />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import TheNavbar from '@/components/the-navbar'
import TheFooter from '@/components/the-footer'
export default {
  components: {
    TheNavbar,
    TheFooter,
  }
}
</script>