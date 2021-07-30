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
  },
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      console.log(window.uid)
      console.log(this.$router.currentRoute.name)
      if (window.uid) {
        if (this.$router.currentRoute.name !== 'home') {
          this.$router.push({ name: 'home' })
        }
      } else {
        this.$router.push({ name: 'login' })
      }
      this.$root.$emit('Spinner::hide')
    })
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
