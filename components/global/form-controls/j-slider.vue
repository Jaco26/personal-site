<template>
  <base-input :id="$attrs.id">
    <template v-slot:label>
      {{label}}
    </template>
    <template v-slot:input>
      <div class="j-slider">
        <ul class="j-slider__tickmarks">
          <template v-for="(tic, i) in sliderTickmarks">
            <li class="tickmark" :key="i"></li>
          </template>
        </ul>

        <input
          ref="slider"
          class="j-slider__input"
          type="range"
          :min="min"
          :max="max"
          :step="sliderStep"
          v-bind="$attrs"
          @input="$listeners.input(Number($event.target.value))"
        >
      </div>
    </template>
  </base-input>
</template>

<script>
import BaseInput from '@/components/global/form-controls/base-input'
export default {
  props: {
    value: Number,
    label: String,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    step: [String, Number],
    tickmarks: Boolean,
  },
  components: {
    BaseInput,
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.slider.value = this.value
    })
  },
  computed: {
    sliderStep() {
      if (this.step == undefined) return 'any'
      const step = Number(this.step)
      if (isNaN(step)) return 'any'
      return step
    },
    sliderTickmarks() {
      const step = Number(this.step)
     
      if (!this.tickmarks || this.sliderStep === 'any') {
        return []
      }
      return new Array(Math.floor((this.max - this.min) / this.step) + 1)
    }
  },
}
</script>

<style lang="scss" scoped>
.j-slider {
  position: relative;

  .j-slider__tickmarks {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    left: .5rem;
    top: .625rem;
    width: 100%;
    display: flex;
    z-index: 1;

    .tickmark {
      flex: 1;
      padding: 0;
      margin: auto;
      height: .25rem;
      border-left: 1px solid black
    }
  }

  .j-slider__input {
    position: relative;
    top: .125rem;
    z-index: 2;
  }
}
.slider-wrapper {
  position: relative;
}

// .tickmarks {

// }


</style>