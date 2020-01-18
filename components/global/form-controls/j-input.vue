<template functional>
  <div class="j-input">
    <label class="j-input__label"> {{props.label}}</label>
    <input class="j-input__input" v-bind="data.attrs" v-on="data.listeners">
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  }
}
</script>

<style scoped>
.j-input {
  padding: .25rem;
}
.j-input__label {

}
.j-input__input {
  font: inherit;
}
</style>