<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body ">
      <div class="container is-fluid">
        <div class="">
          <j-row>
            <j-col>
              <component :is="posts[$route.params.article]"></component>
            </j-col>
          </j-row>
        </div>  
      </div>
    </div>
    
  </section>
</template>

<script>
import GamesArticle from '@/components/thoughts/games-article'
export default {
  middleware(ctx) {
    const articleName = ctx.params.article
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob',
      },
      {
        to: '/thoughts',
        text: 'Thoughts',
      },
      {
        to: `/thoughts/${ctx.params.article}`,
        text: articleName
      }
    ])
  },
  data() {
    return {
      posts: {
        'on-games': GamesArticle
      }
    }
  }
}
</script>

<style scoped>
/* .hero > .hero-body {
  align-items: flex-start !important;
} */
</style>