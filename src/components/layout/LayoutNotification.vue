<template>
  <div
    v-if="show"
    :class="`alert-${type}`"
    class="alert alert-warning alert-dismissible fade show"
  >
    {{ message }}
    <button
      @click="close()"
      type="button"
      class="close"
    >
      <span>&times;</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'LayoutNotification',
  data: () => ({
    show: false,
    message: '',
    type: 'danger'
  }),
  created () {
    this.$root.$on('Notification::show', payload => {
      this.show = true
      this.type = payload.type
      this.message = payload.message

      setTimeout(() => { this.close() }, payload.timeout || 4000)
    })
  },
  methods: {
    close () {
      this.message = ''
      this.type = 'danger'
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert {
    position: absolute;
    right: 20px;
    top: 20px;
    max-width: 400px;
  }
</style>
