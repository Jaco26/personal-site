<template>
  <div>
    <button class="btn icon" @click="active = !active">
      <span style="font-size: 1.25rem;" v-text="active ? 'X' : '• • •'"></span>
    </button>
    <transition name="menu">
      <section v-if="active" class="menu">
        <j-container class="flex fullheight-with-dense-navbar">
          <j-row class="align-center">
            <j-col>
              <nuxt-link class="card flat" to="/games">
                <div class="card-title text-center text-dark text-underlined py-0">
                  Games
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/photos">
                <div class="card-title text-center text-dark text-underlined py-0">
                  Photos
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/thoughts">
                <div class="card-title text-center text-dark text-underlined py-0">
                  Thoughts
                </div>
              </nuxt-link>
              <nuxt-link class="card flat" to="/projects">
                <div class="card-title text-center text-dark text-underlined py-0">
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
  watch: {
    $route(newVal) {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/variables.scss';
.menu {
  position: absolute;
  display: block;
  top: $navbar-dense-height;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $light;
}

.menu-enter-active {
  animation: openMenu .2s cubic-bezier(0.39, 0.575, 0.565, 1)
}

.menu-leave-active {
  animation: openMenu reverse .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes openMenu {
  from {
    height: 0;
  }
  to {
    height: 100vh
  }
}

</style>

