<template>
  <div>
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
    <div class="container">
      <expanse-list-item />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import groupBy from 'lodash.groupby'
import ExpanseListItem from './ExpanseListItem.vue'

export default {
  components: { ExpanseListItem },
  name: 'ExpansesList',
  data: () => ({
    expanses: []
  }),
  created () {
    this.getData()
  },
  computed: {
    groupedMounths () {
      if (this.expanses.length) {
        const months = groupBy(this.expanses, i => (
          moment(i.createdAt).format('MM/YYYY')
        ))

        const sortedMonths = Object.keys(months).sort((a, b) => {
          const pattern = 'MM/YYYY HH'
          if (moment(`${a} 01`, pattern).isBefore(moment(`${b} 01`, pattern))) {
            return -1
          } else {
            return +1
          }
        })

        return sortedMonths.map(month => ({
          month,
          data: months[month],
          total: months[month].map(i => +i.value).reduce((a, c) => a + c, 0)
        }))
      } else {
        return []
      }
    }
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
