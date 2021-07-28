<template>
  <div id="app">
    <base-spinner/>
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'

export default {
  name: 'App',
  components: {
    BaseSpinner
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  color: var(--light);
  background-color: var(--darker);
}
</style>
