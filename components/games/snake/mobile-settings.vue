<template>
  <section v-if="value" class="modal">
    <j-container class="flex fullheight">
      <j-row>
        <j-col class="d-flex flex-column align-start">
          <j-checkbox
            id="show-score-checkbox-mobile"
            label="Show Score"
            :value="showScore"
            @change="$emit('update:showScore', $event)"
          ></j-checkbox>

          <j-slider
            ref="slider"
            id="speed-slider-mobile"
            :label="`Speed: ${snakeSpeed.value}`"
            step="1"
            tickmarks
            :min="snakeSpeed.min"
            :max="snakeSpeed.max"
            :value="snakeSpeed.value"
            @input="$emit('update:snakeSpeed', $event)"
          ></j-slider>

          <j-select
            blur
            label="Game Mode"
            :options="['classic', 'polluter']"
            :value="gameMode"
            @input="$emit('update:gameMode', $event)"
          >
            <template v-slot:option="{ value }">
              {{value[0].toUpperCase() + value.slice(1)}}
            </template>
          </j-select>


        </j-col>
      </j-row>
      <j-row>
        <j-col>
          <!-- <j-select
            blur
            label="Game Mode"
            :options="['classic', 'polluter']"
            :value="gameMode"
            @input="$emit('update:gameMode', $event)"
          >
            <template v-slot:option="{ value }">
              {{value[0].toUpperCase() + value.slice(1)}}
            </template>
          </j-select> -->
        </j-col>
      </j-row>
      <j-row class="align-end">
        <j-col>
          <button class="btn primary block" @touchstart="$listeners.input(!value)">Close</button>
        </j-col>
      </j-row>
    </j-container>
  </section>
</template>

<script>
export default {
  props: {
    value: Boolean,
    gameMode: String,
    snakeSpeed: Object,
    showScore: Boolean
  }
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;

}
/* .modal-content {
  position: relative;
  height: 100%;
  width: 100%;
}
.modal-content__close {
  position: relative;

  bottom: 0
} */
</style>