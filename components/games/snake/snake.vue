<template>
  <snake-canvas :width="dimensions.width" :height="dimensions.height" v-slot="{ ctx }">
    <div class="columns is-centered">
      <div class="column">
        <button @click="gameOn = !gameOn">{{gameOn ? 'Pause' : 'Start'}}</button>
        <button @click="gameOver = !gameOver">{{gameOver ? 'Reset' : 'Game Over'}}</button>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column">
        <Game
          v-if="ctx"
          :options="{ ...dimensions, ctx }"
          :gameOn.sync="gameOn"
          :gameOver.sync="gameOver"
          :score.sync="gameScore"
        />
      </div>
    </div>
    
  </snake-canvas>
</template> 

<script>
import SnakeCanvas from '@/components/games/snake/canvas'
import Game from '@/components/games/snake/game'

export default {
  components: {
    SnakeCanvas,
    Game,
  },
  data() {
    return {
      gameOn: false,
      gameOver: false,
      gameScore: 0,
      dimensions: {
        width: 900,
        height: 600,
        nRows: 40,
        nCols: 60,
      },
    }
  },
}
</script>