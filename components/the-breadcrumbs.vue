<template>
  <b-navbar-item tag="div">
    <template v-for="(crumb, i) in $store.state.breadcrumbs">
      <div :key="i" class="hihi">
        <span v-if="i > 0" class="is-size-7">/</span>
        <nuxt-link class="breadcrumb-link" :to="crumb.to">{{crumb.text}}</nuxt-link>
      </div>
    </template>
  </b-navbar-item>
</template>

<style scoped>
.breadcrumb-link {
  margin: .6rem;
  font-size: 1.3rem
}
.hihi {
  display: flex;
  align-items: center;
  font-weight: 300;
}
</style>