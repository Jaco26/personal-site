<template>
  <a class="footer-link" :href="href">
    <b-icon :icon="icon"></b-icon>
    {{text}}
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  }
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