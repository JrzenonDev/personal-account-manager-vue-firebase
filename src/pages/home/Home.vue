<template>
  <div class="home">
    <div class="row">
      <div class="col-6 home-box">
        <small>Você gastou</small>
        <div
          class="money"
          v-money-format="totals.totalSpent"
        />
        <small>Em 89 compras</small>
      </div>
      <div class="col-6 home-box">
        <small>A média de gasto é de</small>
        <div
          class="money"
          v-money-format="totals.average"
        />
      </div>
      <div class="col-6 home-box">
        <small>A maior compra foi de</small>
        <div
          v-money-format="totals.beggest.value"
          class="money"
        />
        <small>No dia 10/08/2021</small>
      </div>
      <div class="col-6 home-box">
        <small>A menor compra foi de</small>
        <div
          class="money"
          v-money-format="totals.lowest.value"
        />
        <small>No dia 20/08/2021</small>
      </div>
    </div>
  </div>
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
  computed: {
    totals () {
      const { expanses: exp } = this
      const values = {
        totalSpent: 0,
        average: 0,
        beggest: {},
        lowest: {}
      }

      if (exp.length) {
        values.totalSpent = exp.map(e => +e.value)
          .reduce((accumulator, current) => accumulator + current, 0)

        values.average = values.totalSpent / exp.length

        values.beggest = exp.sort((a, b) => +b.value - +a.value)[0]
        values.lowest = exp.sort((a, b) => +a.value - +b.value)[0]
      }

      return values
    }
  },
  methods: {
    getData () {
      const ref = this.$firebase.database().ref(`/${window.uid}`)

      ref.on('value', data => {
        const values = data.val()
        this.expanses = Object.keys(values).map(i => values[i])

        console.log(this.expanses)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 15px;
    font-size: 30pt;

    .home-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: calc(50vh - 15px);
      border: 1px solid var(--dark-medium);
      small {
        font-size: 1.3rem;
      }
      .money {
        color: var(--featured);
      }
      &:nth-child(2), &:nth-child(4) {
        border-left: none;
      }
      &:nth-child(3), &:nth-child(4) {
        border-top: none;
      }
    }
  }
</style>
