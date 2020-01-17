<template>
  <client-only>
    <div class="navbar dense">
      <nav>
        <div class="d-flex align-center">
          <div class="navbar-title">
            <nuxt-link to="/">jacobsalright</nuxt-link>
          </div>
          <ul class="breadcrumbs list">
            <li v-for="(crumb, i) in $store.state.breadcrumbs.slice(1)" :key="i">
              <span class="breadcrumbs-seperator">-</span>
              <nuxt-link exact :to="crumb.to">{{crumb.text}}</nuxt-link>
            </li>
          </ul>
        </div>
        <TheMobileNavMenu v-if="breakpoint.isMobile" />
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