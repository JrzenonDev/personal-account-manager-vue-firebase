<template>
  <button class="btn btn-logout">
    <i class="fa fa-power-off"></i>
    Logout
  </button>
</template>

<script>

export default {
  name: 'LayoutLogout'
}
</script>

<style lang="scss" scoped>
  .btn-logout {
    width: 100%;
    cursor: pointer;
    color: var(--white);
    &:hover {
      color: var(--featured);
    }
  }
</style>
