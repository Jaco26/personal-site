<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <j-row centered>
          <j-col size="two-fifths">
            <ul>
              <li>
                <j-blurb-link blurbIsLink to="/thoughts/on-games" label="Jacob Shares His Thoughts On Games">
                  <span class="subtitle is-5">because he really likes to play them</span> 
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