<template>
  <div id="app">
    <base-spinner/>
    <div class="contaier-fluid" v-if="isLogged">
      <div class="row">
        <div class="col-lg-3">
          <layout-navigation />
        </div>
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNavigation from './components/layout/LayoutNavigation.vue'

export default {
  name: 'App',
  components: {
    BaseSpinner,
    LayoutNavigation
  },
  data () {
    return {
      isLogged: false
    }
  },
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      if (window.uid) {
        if (this.$router.currentRoute.name !== 'home') {
          this.$router.push({ name: 'home' })
        }
      } else {
        this.$router.push({ name: 'login' })
      }
      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
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
