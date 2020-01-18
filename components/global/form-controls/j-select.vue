<template functional>
  <select
    v-bind="data.$attrs"
    class="j-select"
    :class="[data.staticCalss, data.class]"
    :value="props.value"
    @input="listeners.input($event.target.value)"
  >
    <option selected disabled value="">{{props.label}}</option>
    <option
      v-for="(opt, i) in props.options"
      :key="i"
      :selected="opt.selected"
      :value="opt.value"
    >
      <slot name="option" v-bind="{ index: i, ...opt }">
        {{opt.text}}
      </slot>
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, Function, Promise, Array, Boolean, Number, String],
      default: null
    },
    label: {
      type: String,
      default: 'Make a selection'
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style lang="scss">
@import 'assets/style/variables.scss';
.j-select {
  font: inherit;
}
</style>