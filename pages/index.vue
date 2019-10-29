<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <j-row centered>
          <j-col size="two-fifths">
            <ul>
              <li>
                <j-blurb-link to="/games" label="Games">
                  Have fun with some classic arcade games I've implemented with my own spin using HTML Canvas and Javascript.
                </j-blurb-link>
              </li>
              <li>
                <j-blurb-link to="/photos" label="Photos">
                  There isn't anything here yet ...
                </j-blurb-link>
              </li>
              <li>
                <j-blurb-link to="/blog" label="Blog">
                  This is where I write my thoughts about things.
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
      }
    ])
  },
}
</script>

<style scoped>
.welcome {
  /* display: inline-flex; */
  align-items: flex-start !important
}
/* 
ul {
  list-style: none;
  padding: 0 !important; 
  margin: 0 !important;
}
ul > li {
  margin-left: 1rem !important;
  margin-bottom: .8rem !important;
  /* padding: 0 !important; */
/* } */ 
</style>