<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="content">
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
            <li>For each successful slap, the slapper would receive one cheese-it (you know, the cheesy cracker).</li>
          </ol>
          <p>
            I summoned all stealth and reflex to me and did reasonably well at avoiding being slapped and okay at slapping. 
            My partner and I played hard and our cheez-its slowly accumulated. Not long into the gameplay, I along with several 
            others noticed with indignation that some pairs were breaking the rules.  Neither partner was trying to avoid being 
            slapped. They just alternated between positions in rapid succession and their cheez-its piled up. I was only more 
            upset when the teacher did not discipline them but instead congratulated them on a game well played! On reflection, 
            I had to admit that nowhere did the rules prohibit the tactics of the damned cooperators.
          </p>
        </div>
        
        <ul>
          <li class="subtitle is-4 has-text-centered has-text-weight-light">
            <nuxt-link to="/games/snake">Snake</nuxt-link>
          </li>
          <li class="has-text-centered">
            ... more on the way
          </li>
        </ul>
        
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