<template>
  <ul>
    <template v-for="(crumb, i) in $store.state.breadcrumbs">
      <li :key="i" class="subtitle is-5 has-text-weight-light">
        <div class="level">
          <!-- TODO: conditional .has-white-text is kinda a hack...should probably make better -->
          <span class="is-size-7" :class="{ 'has-text-white': i === 0 }">/</span>
          <nuxt-link class="breadcrumb-link" :to="crumb.to">{{crumb.text}}</nuxt-link>
        </div>
      </li>
    </template>
  </ul>
</template>

<style scoped>
li {
  display: inline-flex;
}
.breadcrumb-link {
  margin: .4rem;
}
</style>