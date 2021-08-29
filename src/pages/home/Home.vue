<template>
  <main>
    Home
  </main>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    expanses: []
  }),
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const ref = this.$firebase.database().ref(`/${window.uid}`)

      ref.on('value', data => {
        const values = data.val()
        this.expanses = values

        console.log(this.expanses)
      })
    }
  }
}
</script>
