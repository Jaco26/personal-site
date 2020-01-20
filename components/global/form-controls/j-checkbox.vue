<template>
  <base-input :label="label" :id="$attrs.id">
    <template v-slot:input>
      <input type="checkbox" class="j-checkbox__input" v-bind="$attrs" :checked="checked" @change="$listeners.change($event.target.checked)">
    </template>
  </base-input>
</template>

<script>
import BaseInput from '@/components/global/form-controls/base-input'
export default {
  components: {
    BaseInput,
  },
  props: {
    label: String,
    checked: Boolean,
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>
