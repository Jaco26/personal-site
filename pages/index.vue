<template>
  <j-row>
    <j-col class="bg-light--darker d-flex align-center mobile-12 tablet-7">
      <article class="card flat">
        <div class="card-text text-justified">
          <p class="mt-0">
            Jacob went to school at Augsburg University in Minneapolis, MN and graduated with a B.A. in Sociology.
            He worked for a little over a year at a food co-op, voted to join a union representing food and 
            commercial workers and, dizzy from existential vertigo after the neo-nazi rally in Charlottesville, quit
            and shortly afterward attended a full stack software development program at a coding bootcamp downtown.
          </p>
          <p>
            There he learned that, after a half century countless hours of work and sweeping infrastructure built by countless
            programmers, software development actually requires a much less specialized skillset than he had imagined. Since, 
            he has delighted in assembling various applications; most written for their own sake, and some – like this website –
            with idea that others would look.
          </p>
          <p>
            He often has three or four or five ideas at once for projects he'd like to work on. One is a mostly-working simple 
            compiler that evaluates arithmetic expressions input as a list of characters. Others have included jaunts into
            data collection and analysis with Python and Pandas. Most are web applications. Some involve servers and databases.
            Others just run in the web browser, like the games included here.
          </p>
          <p>
            Curiosity is at the foundation of all of Jacob's work. He thinks that there is little else more satisfying than 
            getting a handle on a difficulty or some non-comprehension and observing growth in one's capacity to manage and/or
            comprehend it. He wants to know how things work so he can too.
          </p>
        </div>
      </article>
    </j-col>
    <j-col class="bg-dark--darker px-4 d-flex flex-column justify-center">
      <nuxt-link class="card flat pa-0 my-4 text-light" to="/games">
        <div class="card-title text-light text-underlined pb-0">
          Games
        </div>
        <div class="card-text">
          Have fun with some classic arcade games I've implemented with my own spin using
          HTML Canvas and Javascript.
        </div>
      </nuxt-link>
      <nuxt-link class="card flat pa-0 mb-4 text-light" to="/photos">
        <div class="card-title text-light text-underlined pb-0">
          Photos
        </div>
        <div class="card-text">
          There isn't anything here yet ...
        </div>
      </nuxt-link>
      <nuxt-link class="card flat pa-0 mb-4 text-light" to="/thoughts">
        <div class="card-title text-light text-underlined pb-0">
          Thoughts
        </div>
        <div class="card-text">
          This is where I write my thoughts about things.
        </div>
      </nuxt-link>
    </j-col>
  </j-row>
</template>

<script>
export default {
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