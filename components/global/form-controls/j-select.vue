
<template>
  <div class="j-select">
    <label class="j-select__label" :for="id">
      <slot name="label">{{label}}</slot>
    </label>
    <select     
      v-blur:oninput="blur"
      v-bind="$attrs"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option selected disabled value="">{{placeholder}}</option>
      <option
        v-for="(opt, i) in selectionOptions"
        :key="i"
        :selected="opt.selected"
        :value="opt.value"
      >
        <slot name="option" v-bind="{ index: i, ...opt }">
          {{opt.text}}
        </slot>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, Function, Promise, Array, Boolean, Number, String],
      default: null
    },
    label: String,
    blur: Boolean, // use this to conditionally apply custom v-blur directive to input
    placeholder: {
      type: String,
      default: 'Make a selection'
    },
    options: {
      type: Array,
      default: () => [],
      validator(val) {
        if (Array.isArray(val)) {
          const ofKind = typeof val[0]
          return val.every(x => typeof x === ofKind)
        }
        return false
      }
    }
  },
  data() {
    return {
      id: null
    }
  },
  mounted() {
    this.id = 'j_UID' + this._uid;
  },
  computed: {

    selectionOptions() {
      return this.options.map(op => {
        if (typeof op === 'string' || typeof op === 'number') {
          return { value: op, text: op }
        }
        return op // this is assuming
      })
    },
  }
}
</script>

<style lang="scss">
@import 'assets/style/helpers/text.scss';
.j-select {
  display: flex;
  flex-direction: column;
  height: 2.5rem;

  .j-select__label {
    @extend .caption;
    padding-bottom: 2px;
  }

  select {
    font: inherit
  }
}
</style>