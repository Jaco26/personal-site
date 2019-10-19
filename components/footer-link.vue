<template functional>
  <a v-if="props.tag === 'a'" class="footer-link" :href="props.href">
    <b-icon :icon="props.icon"></b-icon>
    <slot name="text">{{props.text}}</slot>
  </a>
  <nuxt-link v-else class="footer-link"  :to="props.to">
    <b-icon :icon="props.icon"></b-icon>
    <slot name="text">{{props.text}}</slot>
  </nuxt-link>
</template>


<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a',
      validator(val) {
        return !!val && val === 'a' || val === 'nuxt-link'
      }
    },
    to: String,
    href: String,
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
.footer-link {
  display: block;
  margin: .2rem;
  color: #ddd;
}
.footer-link:hover {
  color: #fff;
}
</style>