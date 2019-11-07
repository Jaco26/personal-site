<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <j-row centered>
          <j-col size="two-fifths">
            <ul>
              <li>
                Okay, I don't have any writing I want to share right now but look at <nuxt-link to="/games">these games!</nuxt-link>
              </li>
            </ul>
          </j-col>
        </j-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob',
      },
      {
        to: '/thoughts',
        text: 'Thoughts',
      }
    ])
  }
}
</script>