<template>
  <div>
    <div class="columns is-centered">
      <div class="column">
        <button @click="gameState.gameOn = !gameState.gameOn">{{gameState.gameOn ? 'Pause' : 'Start'}}</button>
        <button @click="gameState.gameOver = !gameState.gameOver">{{gameState.gameOver ? 'Reset' : 'Game Over'}}</button>
        <span>Score: {{gameState.score}}</span>
      </div>
    </div>
    <game-canvas :width="dimensions.width" :height="dimensions.height" v-slot="{ hasCtx }">
      <Snake
        v-if="hasCtx"
        :dimensions="dimensions"
        :controls="controls"
        :isPolluter="isPolluter"
        v-bind.sync="gameState"
      />
    </game-canvas>
  </div>
</template> 

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'
export default {
  props: {
    controls: Object,
    dimensions: Object,
  },
  components: {
    GameCanvas,
    Snake,
  },
  data() {
    return {
      gameState: {
        gameOn: false,
        gameOver: false,
        score: 0,
      },
      
      isPolluter: true,
    }
  },
}
</script>