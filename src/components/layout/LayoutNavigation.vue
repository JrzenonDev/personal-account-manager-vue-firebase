<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'LayoutNavigation'
}
</script>

<style lang="scss" scoped>
  .nav {
    margin-left: -15px;
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
