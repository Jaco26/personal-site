<template>
  <b-navbar-item tag="div">
    <template v-for="(crumb, i) in $store.state.breadcrumbs">
      <div :key="i" class="hihi">
        <span v-if="i > 0" class="is-size-7">/</span>
        <nuxt-link class="breadcrumb-link is-size-6-mobile" :to="crumb.to">{{crumb.text}}</nuxt-link>
      </div>
    </template>
  </b-navbar-item>
</template>

