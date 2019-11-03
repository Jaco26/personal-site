<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <j-row centered>
          <j-col size="two-fifths">
            <ul>
              <li>
                <j-blurb-link to="/games/snake" label="Snake">
                  How long can you balance the snake's insatiable hunger? How long can you grow before you become just too long?
                </j-blurb-link>
              </li>
              <li>
                <j-blurb-link to="/games/pong" label="Pong">
                  Grab a friend or move both paddles yourself to play this co-op version of Pong.
                </j-blurb-link>
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
        text: 'Jacob'
      },
      {
        to: '/games',
        text: 'Games'
      },
    ])
  },
}
</script>