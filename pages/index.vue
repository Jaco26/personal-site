<template>
  <j-row>
    <j-col class="bg-light--darker d-flex align-center mobile-12 tablet-7">
      <article class="card flat">
        <div class="card-text" :class="{ 'text-justified': 0 }">
          <p>
            Jacob went to school at Augsburg University in Minneapolis, MN and graduated with a B.A. in Sociology.
            He worked for a little over a year in a grocery store deli kitchen moving food from big boxes into many
            smaller boxes. Feeling a desire to do something that engaged more of himself and inspired by Propublica's 
            <a href="https://projects.propublica.org/facebook-ads/">Facebook Ad Collector</a> and other news apps, he
            quit to attend a full stack software development program at a coding bootcamp downtown.
          </p>
          <p>
            There he learned that, after more than a half century of countless hours of work and sweeping infrastructure 
            built by innumerable programmers, software development actually often requires a much less specialized skillset
            than he had imagined and takes only curisoty, practice and patience. Since, he has delighted in assembling various
            applications; most written for their own sake, and some – like this website – with the idea that others would look.
          </p>
          <p>
            He often has three or four or five ideas at once for projects he'd like to work on. One he has <em>mostly</em> working
            is a simple compiler written in Rust that evaluates arithmetic expressions input as a list of characters. Others have 
            included jaunts into data collection and analysis with Python and Pandas. Most are web applications. Some involve
            servers and databases. Others just run in the web browser, like the games included here.
          </p>
          <p>
            Curiosity is at the foundation of all of Jacob's work. He thinks that there is little else more satisfying than 
            getting a handle on a difficulty or some non-comprehension and observing growth in one's capacity to manage and/or
            comprehend it.
          </p>
        </div>
      </article>
    </j-col>
    <j-col v-if="breakpoint.aboveMobile" class="bg-dark--darker px-4 d-flex flex-column justify-center">
      <nuxt-link class="card flat pa-0 my-4 text-light" to="/games">
        <div class="card-title text-light text-underlined pb-0">
          Games
        </div>
        <div class="card-text">
          <p class="my-0">
            Have fun with some classic arcade games I've implemented with my own spin using
            HTML Canvas and Javascript.
          </p>
        </div>
      </nuxt-link>
      <nuxt-link class="card hov-orange flat pa-0 mb-4 text-light" to="/photos">
        <div class="card-title text-light text-underlined pb-0">
          Photos
        </div>
        <div class="card-text">
          <p class="my-0">
            There isn't anything here yet ...
          </p>
        </div>
      </nuxt-link>
      <nuxt-link class="card hov-purple flat pa-0 mb-4 text-light" to="/thoughts">
        <div class="card-title text-light text-underlined pb-0">
          Thoughts
        </div>
        <div class="card-text">
          <p class="my-0">
            This is where I write my thoughts about things.
          </p>
        </div>
      </nuxt-link>
      <nuxt-link class="card hov-green flat pa-0 mb-4 text-light" to="/projects">
        <div class="card-title text-light text-underlined pb-0">
          Projects
        </div>
        <div class="card-text">
          <p class="my-0">
            Take a look at some projects I've worked on.
          </p>
        </div>
      </nuxt-link>
    </j-col>
  </j-row>
</template>

<script>
export default {
  inject: ['breakpoint'],
  scrollToTop: true,
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Home'
      }
    ])
  },
}
</script>