<template>
  <transition :name="transition">
    <div class="modal">

    </div>
  </transition>
</template>

<script>
export default {
  props: {
    fullscreen: Boolean,
    transition: {
      type: String,
      default: 'modal'
    },

  },
  computed: {

  }
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000a;
  z-index: 100;
}
.modal-content {
  position: relative;
}


.modal-enter, .modal-leave-to {
  opacity: 0;
}
.modal-enter-active, .modal-leave-active {
  transition: all .2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>