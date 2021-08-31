<template>
  <div class="month-navigation">
    <div class="month-link">
      <div class="month-label">01/2021</div>
      <div class="value-label">R$ 92.21</div>
    </div>
    <div class="month-link">
      <div class="month-label">01/2021</div>
      <div class="value-label">R$ 92.21</div>
    </div>
    <div class="month-link">
      <div class="month-label">01/2021</div>
      <div class="value-label">R$ 92.21</div>
    </div>
    <div class="month-link">
      <div class="month-label">01/2021</div>
      <div class="value-label">R$ 92.21</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListaGastos',
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
        this.expanses = Object.keys(values).map(i => values[i])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .month-navigation {
    display: flex;
    margin-left: -11px;
    width: calc(100% + 35px);
    background-color: var(--featured-dark);
    cursor: pointer;
    transition: .4s;
    text-align: center;

    .month-link {
      padding: 15px;
      &:hover {
        background-color: var(--featured);
      }
    }

    .value-label {
      color: var(--darker);
      font-size: 8pt;
    }
  }
</style>
