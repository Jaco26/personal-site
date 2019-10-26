<template>
  <div>
    <TheNavbar />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/the-navbar'
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      rules: {
        isMobile: w => w < 769,
        isTablet: w => w >= 769 && w < 1024,
        isDesktop: w => w >= 1024 && w < 1216,
        isWidescreen: w => w >= 1216 && w < 1408,
        isFullhd: w => w >= 1408,

        aboveMobile: w => w >= 769,
        aboveTablet: w => w >= 1024,
        aboveDesktop: w => w >= 1216,
        
        belowDesktop: w => w < 1024,
        belowWidescreen: w => w < 1216,
        belowFullhd: w => w < 1408,

      },
      breakpoint: {
        isMobile: null,
        isTablet: null,
        isDesktop: null,
        isWidescreen: null,
        isFullhd: null,
      },
    }
  },
  provide() {
    return {
      breakpoint: this.breakpoint,
    }
  },
  methods: {
    onResize() {
      Object.keys(this.rules).forEach(key => {
        this.breakpoint[key] = this.rules[key](window.innerWidth)
      })
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
