<template>
  <j-row>
    <j-col class="d-flex flex-column">

      <section class="toolbar dense flat bg-light--darker">
        <div class="toolbar-actions">
          <j-row class="align-center">
            <j-col>
              <button class="btn small primary" @click="onGameStateControlClick">
                {{gameStateControlText}}
              </button>
            </j-col>
            <j-col class="text-right">
              <j-select v-model="selected" label="Select a thing" :options="options"></j-select>
            </j-col>
          </j-row>
        </div>
      </section>
    </j-col>
  </j-row>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        {
          text: 'Jacob',
          value: 'jacob',
        },
        {
          text: 'Caroline',
          value: 'caroline',
        },
        {
          text: 'Xena',
          value: 'xena',
          selected: true,
        },
      ]
    }
  },
  computed: {
    gameStateControlText() {
      return 'Hey Babe'
    },
  },
  methods: {
    onGameStateControlClick() {

    },
  },
}
</script>

<style lang="scss">
@import 'assets/style/variables.scss';
@import 'assets/style/tools/mixins.scss';
.toolbar {
  padding: 0 1.25rem;
  margin: 0;
  height: $navbar-height;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 2px;
  @include elevation(2px);
  

  &.dense {
    height: $navbar-dense-height;
  }

  &.flat {
    box-shadow: none;
  }

  &.outlined {
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .toolbar-title {
    font-size: 1.25rem;
    font-weight: 700;
    padding-right: 1rem;
  }

  .toolbar-actions {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    // flex: 1;
  }
}

</style>