<template>
  <section class="hero is-white is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">

        <div class="has-text-centered">
          This is the games display page
        </div>

        <div class="columns is-centered">
          <div class="column is-narrow">
            <component :is="selectedGame"></component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SnakeGame from '@/components/games/snake/snake'
export default {
  data() {
    return {
      snake: SnakeGame,
    }
  },
  computed: {
    selectedGame() {
      return this[this.$route.params.game]
    }
  }
}
</script>