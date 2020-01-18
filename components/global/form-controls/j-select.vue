<template functional>
  <select v-bind="data.attrs" v-on="data.listeners">
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
    options: {
      type: Array,
      default: () => [],
    }
  }
}
</script>