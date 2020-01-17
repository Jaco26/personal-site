<template>
  <client-only>
    <div class="navbar dense">
      <nav>
        <div class="navbar-title">
          <nuxt-link to="/">jacobsalright</nuxt-link>
        </div>
        <ul v-if="breakpoint.aboveMobile" class="navbar-links">
          <li v-for="(crumb, i) in $store.state.breadcrumbs.slice().reverse()" :key="i" class="navbar-link">
            <span class="navbar-link__seperator" v-if="i > 0">&leftarrow;</span>
            <nuxt-link exact :to="crumb.to">{{crumb.text}}</nuxt-link>
          </li>
        </ul>
        <TheMobileNavMenu v-else  />
      </nav>
    </div>
  </client-only>
</template>

<script>
import TheMobileNavMenu from '@/components/the-mobile-nav-menu'
export default {
  inject: ['breakpoint'],
  components: {
    TheMobileNavMenu,
  }
}
</script>