<template>
  <div id="app">
    <base-spinner />
    <button>Mostrar Spinner</button>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import BaseSpinner from './components/global/BaseSpinner.vue'

export default {
  components: {
    BaseSpinner
  }
}
</script>

<style lang="scss">
</style>
