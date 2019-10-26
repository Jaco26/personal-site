<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">

        <div class="columns">
          <div class="column">
            <h1 class="title">Bla bla bla</h1>
            <h3 class="subtitle">Jacob's thoughts on games</h3>
            <div class="content">
              <p>
                Games reflect our world back to us because we put our world into them. 
                Our basic assumptions about human nature, human history, human present, and human future are all 
                embedded in them. The story of humanity as told by by the most visible cultural artifacts is one, 
                ultimately, of competition. Likewise, most games (being cultural artifacts) can be described as 
                involving competition in some central way. What interests me is: who is competing and against what? 
                What is the win condition? Is it domination and is the thing to be dominated another player or 
                game AI or team or ‘nature’ (do we include ‘time’) itself?
              </p>
              <p>
                As part of some team building exercise imposed on my fifth (or fourth…who can remember) grade class, 
                I along with everyone in the class was paired with another kid and were instructed to play a game with 
                the following rules:
              </p>
              <ol>
                <li>Both players face each other.</li>
                <li>One holds their hands in front of them face down a few inches above the other’s whose hands are facing up.</li>
                <li>The one on the bottom tries to slap the tops of the hands of the other.</li>
                <li>When hands have been slapped, the players switch positions.</li>
                <li>For each successful slap, the slapper receives one cheese-it (you know, the cheesy cracker).</li>
              </ol>
              <p>
                I summoned all stealth and reflex to me and did okay at slapping and avoiding being slapped. 
                My partner and I played hard and our cheez-its slowly accumulated. Not long into the gameplay, I along with several 
                others noticed with indignation that some pairs were breaking the rules.  Neither partner was trying to avoid being 
                slapped. They were just slapping each other's hands in rapid succession and their cheez-its piled up. I was only more 
                upset when the teacher did not discipline them but instead congratulated them on a game well played! On reflection, 
                I had to admit that nowhere did the rules prohibit the tactics of the darn cooperators.
              </p>
            </div>
          </div>

          <div class="column">
            <div class="subtitle is-4 has-text-centered has-text-weight-light">
              <nuxt-link to="/games/snake">Snake</nuxt-link>
            </div>
            <div class="has-text-centered">
              ... more on the way
            </div>
          </div>
        </div>

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