<template>
  <div class="app">
    <slot />
  </div>
</template>

<script>
export default {
    data() {
    return {
      windowSize: {
        width: 0,
        height: 0,
      },
      rules: {
        isMobile: w => w < 600,
        isTablet: w => w >= 600 && w < 960,
        isLaptop: w => w >= 960 && w < 1264,
        isDesktop: w => w >= 1264 && w < 1904,
        isHuge: w => w >= 1904,

        aboveMobile: w => w >= 600,
        aboveTablet: w => w >= 960,
        aboveLaptop: w => w >= 1264,

        belowLaptop: w => w < 960,
        belowDesktop: w => w < 1264,
        belowHuge: w => w < 1904,
      },
      breakpoint: {
        isMobile: null,
        isTablet: null,
        isLaptop: null,
        isDesktop: null,
        isHuge: null,

        aboveMobile: null,
        aboveTablet: null,
        aboveLaptop: null,
        
        belowLaptop: null,
        belowDesktop: null,
        belowHuge: null,
      },
    }
  },
  provide() {
    return {
      breakpoint: this.breakpoint,
      windowSize: this.windowSize,
    }
  },
  methods: {
    onResize() {
      this.windowSize.width = window.innerWidth
      this.windowSize.height = window.innerHeight

      Object.keys(this.rules).forEach(key => {
        this.breakpoint[key] = this.rules[key](window.innerWidth)
      })
    }
  },
  created() {
    if (process.client) {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
/*
  apply this class to the outermost element in layout components
  to enable easily setting page heights
*/
.app {
  position: absolute;
  height: 100%;
  width: 100%;
}

</style>