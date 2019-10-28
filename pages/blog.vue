<template>
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">"Blog"</h1>
    </div>
  </section>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Jacob',
      },
      {
        to: '/blog',
        text: '"Blog"',
      }
    ])
  }
}
</script>