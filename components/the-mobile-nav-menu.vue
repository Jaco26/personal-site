<template>
  <div>
    <button class="btn icon" @touch="active = !active" @click="active = !active">
      <span style="font-size: 1.25rem;" v-text="active ? 'X' : '• • •'"></span>
    </button>
    <transition name="menu">
      <section v-if="active" class="menu">
        <j-container class="flex fullheight-with-dense-navbar">
          <j-row class="align-center">
            <j-col>
              <nuxt-link class="card flat" to="/games">
                <div class="card-title text-center text-dark  py-0">
                  Games
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/photos">
                <div class="card-title text-center text-dark  py-0">
                  Photos
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/thoughts">
                <div class="card-title text-center text-dark  py-0">
                  Thoughts
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/projects">
                <div class="card-title text-center text-dark  py-0">
                  Projects
                </div>
              </nuxt-link>
            </j-col>
          </j-row>
        </j-container>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    closeMenu() {
      this.active = false
    }
  },
  watch: {
    active(isActive) {
      if (isActive) {
        this.$nextTick(() => {
          document.addEventListener('touch', this.closeMenu)
          document.addEventListener('mousedown', this.closeMenu)
        })

      } else {
        document.removeEventListener('touch', this.closeMenu)
        document.removeEventListener('mousedown', this.closeMenu)
      }
    },
    // $route(newVal) {
    //   this.active = false
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/variables.scss';

.nuxt-link-active,
.nuxt-link-exact-active {
  text-decoration: underline;
  
}

.menu {
  position: absolute;
  display: block;
  top: $navbar-dense-height;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $light;
}

.menu-enter, .menu-leave-to {
  opacity: 0;
}

.menu-enter-active, .menu-leave-active {
  transition: all .1s ease-in-out
}
</style>

