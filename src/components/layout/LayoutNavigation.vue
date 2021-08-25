<template>
  <ul class="nav flex-column justify-content-between">
    <div>
      <router-link
        v-for="(router, i) in routerLink"
        :key="i"
        class="nav-link"
        :to="{name: router.name}"
        exact
        exact-active-class="active"
      >
        <i :class="`fa fa-${router.meta.icon}`" />
        {{ router.meta.title }}
      </router-link>
      <hr>
      <layout-new-expanse />
    </div>

    <layout-logout />
  </ul>
</template>

<script>
import LayoutLogout from './LayoutLogout.vue'
import LayoutNewExpanse from './LayoutNewExpanse.vue'

export default {
  name: 'LayoutNavigation',
  components: {
    LayoutLogout,
    LayoutNewExpanse
  },
  computed: {
    routerLink () {
      return this.$router.options.routes.filter(r => r.name !== 'login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    margin-left: -15px;
    padding-left: 15px;
    width: calc(100% + 30px);
    height: calc(100vh - 49px);

      .nav-link {
        color: var(--white);
        transition: .4;

        &.active {
          color: var(--featured);
          background-color: transparent;
        }

        &:hover {
          color: var(--dark);
          background-color: var(--featured);
        }
      }
  }
</style>
