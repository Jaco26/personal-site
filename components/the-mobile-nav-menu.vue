<template>
  <div>
    <button class="btn icon " v-on="active ? {} : { click: () => active = true}">
      <span style="font-size: 1.25rem;" v-text="active ? 'X' : '•••'"></span>
    </button>
    <transition name="menu">
      <section v-if="active" class="menu">
        <j-container class="flex fullheight-with-dense-navbar">
          <j-row class="align-center">
            <j-col>
              <nuxt-link exact class="card flat active-white" to="/">
                <div class="card-title text-center text-light py-0">
                  Home
                </div>
              </nuxt-link>
              <nuxt-link class="card flat active-teal" to="/games">
                <div class="card-title text-center text-light py-0">
                  Games
                </div>
              </nuxt-link>
              <nuxt-link class="card flat active-purple" to="/photos">
                <div class="card-title text-center text-light  py-0">
                  Photos
                </div>
              </nuxt-link>
              <nuxt-link class="card flat active-orange" to="/thoughts">
                <div class="card-title text-center text-light  py-0">
                  Thoughts
                </div>
              </nuxt-link>
              <nuxt-link class="card flat active-green" to="/projects">
                <div class="card-title text-center text-light  py-0">
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
    },
  },
  watch: {
    active(isActive) {
      if (isActive)
        this.$nextTick(() => {
          document.addEventListener('mousedown', this.closeMenu)
        })
      else
        document.removeEventListener('mousedown', this.closeMenu)
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/_variables.scss';


a {
  &:active,
  &:hover {
    border: 1px solid transparent;
  }
}
.nuxt-link-active,
.nuxt-link-exact-active {

  &.active-white {
    border: 1px solid $light;
  }
  &.active-teal {
    border: 1px solid $teal;
  }
  &.active-purple {
    border: 1px solid #f707ff;
  }
  &.active-orange {
    border: 1px solid $orange;
  }
  &.active-green {
    border: 1px solid limegreen;
  }


}


.menu {
  position: absolute;
  display: block;
  top: $navbar-dense-height;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $dark-darker;
}

.menu-enter, .menu-leave-to {
  opacity: 0;
}

.menu-enter-active, .menu-leave-active {
  transition: all .1s ease-in-out
}
</style>

