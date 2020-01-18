<template>
  <j-row>
    <j-col class="d-flex flex-column">
      <section class="toolbar dense">
        Hi
      </section>
    </j-col>
  </j-row>
</template>

<style lang="scss">
@import 'assets/style/variables.scss';
@import 'assets/style/tools/mixins.scss';
.toolbar {
  background: $light;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  margin: 0;
  height: $navbar-height;
  width: 100%;
  @include elevation(0px);

  &.dense {
    height: $navbar-dense-height;
  }

  &.flat {
    box-shadow: none;
  }
}

</style>