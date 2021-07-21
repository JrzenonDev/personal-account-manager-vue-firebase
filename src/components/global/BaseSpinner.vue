<template>
  <div class="base-spinner fa-3x">
    <i class="fas fa-circle-notch fa-spin"></i>
  </div>
</template>

<script>
export default {
  name: 'base-spinner',
  data () {
    return {
      visible: false
    }
  },
  created () {
    this.$route.$on('Spinner::show', () => {
      this.visible = true
    })

    this.$route.$on('Spinner::hide', () => {
      this.visible = false
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .base-spinner {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $dark-medium;
    color: $featured;
  }

</style>
