<template>
  <div class="tile" :class="classes">
    <slot />
  </div>
</template>

<script>
import TileMixin from './tile-mixin'
export default {
  mixins: [TileMixin],
}
</script>