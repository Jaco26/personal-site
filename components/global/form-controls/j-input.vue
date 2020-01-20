<template>
  <base-input :label="label" :id="$attrs.id">
    <template v-slot:input>
      <input v-bind="$attrs" v-on="$listeners">
    </template>
  </base-input>
</template>

<script>
import BaseInput from '@/components/global/form-controls/base-input'
export default {
  props: {
    label: String,
  },
  components: {
    BaseInput
  }
}
</script>

<style scoped>

</style>