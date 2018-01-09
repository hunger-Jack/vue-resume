<template>
  <div id="app">
    <router-view name="Home"></router-view>
    <router-view name="Login"></router-view>
    <router-view name="SignUp"></router-view>
    <router-view name="Layout"></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
  }

</script>

<style lang="less" scoped>

</style>
