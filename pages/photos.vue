<template>
  <j-row class="wrap">
    <j-col>
      <j-container class="flex fullheight pa-0">
        <j-row>
          <j-col class="d-flex justify-center align-center">
            Hi
          </j-col>
          <j-col>
            Hello
          </j-col>
        </j-row>
        <j-row>
          <j-col>
            Hi
          </j-col>
        </j-row>
      </j-container>
    </j-col>
  </j-row>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.store.commit('SET_BREADCRUMBS', [
      {
        to: '/',
        text: 'Home'
      },
      {
        to: '/photos',
        text: 'Photos'
      },
    ])
  },
}
</script>

