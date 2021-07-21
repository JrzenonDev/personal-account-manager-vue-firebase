<template>
  <div id="app">
    <base-spinner/>
    <button @click="mostrarSpinner()">Mostrar Spinner</button>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'

export default {
  name: 'App',
  components: {
    BaseSpinner
  },
  methods: {
    mostrarSpinner () {
      this.$root.$emit('Spinner::show')
    }
  },
  mounted () {
    console.log(this.$firebase)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
