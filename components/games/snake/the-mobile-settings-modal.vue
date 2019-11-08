<template>
  <b-modal
    :active.sync="showSettings"
    has-modal-card
    full-screen
    :can-cancel="false"
  >
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Settings</p>
      </header>
      <section class="modal-card-body">
        <div class="column">
          <b-field class="is-marginless" label="Game Mode"></b-field>
          <b-select
            expanded 
            ref="gameModeSelect" 
            size="is-small" 
            placeholder="Select a game mode"
            :value="gameMode"
            @input="$emit('update:gameMode', $event)"
          >
            <option value="classic">Classic</option>
            <option value="polluter">Polluter</option>
          </b-select>
        </div>

        <div class="column">
          <b-field class="is-marginless" label="Snake Speed"></b-field>
          <b-slider
            :min="snakeSpeed.min" 
            :max="snakeSpeed.max" 
            :value="snakeSpeed.value"
            @input="$emit('update:snakeSpeed', $event)"
          >
            <b-slider-tick v-for="n in [1,2,3,4,5,6,7]" :key="n" :value="n">{{n}}</b-slider-tick>
          </b-slider>
        </div>

        <div class="column">
          <b-field class="is-marginless" label="Show Score"></b-field>
          <b-switch
            style="margin-top: .2rem"
            :rounded="false" 
            :value="showScore"
            @input="$emit('update:showScore', $event)"
          ></b-switch>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" @click="$emit('update:showSettings', false)">Done</b-button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    showSettings: Boolean,
    gameMode: String,
    snakeSpeed: Object,
    showScore: Boolean,
  }
}
</script>