<template>
  <game-canvas :width="dimensions.width" :height="dimensions.height" v-slot="{ ctx }">
    <Snake
      v-if="ctx"
      :options="{ dimensions, ctx, controls}"
      v-bind.sync="gameState"
    />
  </game-canvas>
</template> 

<script>
import GameCanvas from '@/components/games/game-canvas'
import Snake from '@/components/games/snake/snake'

export default {
  props: {
    controls: Object,
    gameState: Object,
    dimensions: Object,
  },
  components: {
    GameCanvas,
    Snake,
  },
}
</script>