<template>
  <section class="section">
     <!-- <h1 class="title has-text-weight-light">Welcome to this website</h1> -->
      <!-- <h3 class="subtitle">I'm so glad you're here</h3> -->
      <h1 class="title">Welcome</h1>
      <h3 class="subtitle">I'm so glad you're here</h3>
      <div class="columns">
        <div class="column">
          <div class="content">
            <p>
              I've been told that it is important for a professional web developer to have a personal website to showcase 
              basic competency as a web programmer through display of past projects in a way that pleases the eye. Likewise,
              just as it is important to prove to online concert ticket vendors that one is not a robot, it is important when
              selling ones creative capacity, it is important demonstrate that you have at least a few interests and hobbies.
              So, with that as the aim, I present to you two areas in which I enjoy exerting effort:
            </p>
          </div>

          <!-- <article class="tile is-child">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/games">Games</nuxt-link>
            </div>
            <div class="content">
              <p>
                Games reflect our world back to us because we put our world into them. 
                Our basic assumptions about human nature, human history, human present, and human future are all 
                embedded in them. The story of humanity as told by by the most visible cultural artifacts is one, 
                ultimately, of competition. Likewise, most games (being cultural artifacts) can be described as 
                involving competition in some central way. What interests me is: who is competing and against what? 
                What is the win condition? Is it domination and is the thing to be dominated another person or 
                sentient character or team or ‘nature’ (do we include ‘time’) itself?
              </p>
            </div>
          </article>


          <article class="tile is-child">
            <div class="subtitle is-4 has-text-weight-light">
              <nuxt-link to="/photos">Photos</nuxt-link>
            </div>
            <div class="content">
              <p>
                There isn't anything here yet...
              </p>
            </div>
          </article> -->

        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="subtitle has-text-weight-light">
            <nuxt-link to="/games">Games</nuxt-link>
          </div>
          <p>
            Games reflect our world back to us because we put our world into them. 
            Our basic assumptions about human nature, human history, human present, and human future are all 
            embedded in them. The story of humanity as told by by the most visible cultural artifacts is one, 
            ultimately, of competition. Likewise, most games (being cultural artifacts) can be described as 
            involving competition in some central way. What interests me is: who is competing and against what? 
            What is the win condition? Is it domination and is the thing to be dominated another person or 
            sentient character or team or ‘nature’ (do we include ‘time’) itself?
          </p>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="subtitle has-text-weight-light">
            <nuxt-link to="/photos">Photos</nuxt-link>
          </div>
          <p>
            There isn't anything here yet...
          </p>
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
.tile {
  margin-bottom: 2rem !important;
}
</style>
