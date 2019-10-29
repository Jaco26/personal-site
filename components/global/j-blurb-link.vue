<template functional>
  <div>
    <div class="subtitle is-4 has-text-weight-light is-marginless">
      <nuxt-link :to="props.to">
        {{props.label}}
      </nuxt-link>
    </div>
    <div class="blurb-link">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.blurb-link {
  margin: .6rem 0 2rem 0;
}
</style>