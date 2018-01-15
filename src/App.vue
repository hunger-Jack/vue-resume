<template>
  <div id="app">
    <transition name="fade"><router-view name="Home"></router-view></transition>
    <transition name="fade"><router-view name="Login"></router-view></transition>
    <transition name="fade"><router-view name="SignUp"></router-view></transition>
    <transition name="fade"><router-view name="Layout"></router-view></transition>
  </div>
</template>

<script>
  export default {
    name: "app",
  }

</script>

<style lang="less" scoped>
.fade-enter {
    opacity: 0;
    transform: translateX(100%);
}
.fade-enter-active {
    transition: all 0.5s;
}
.fade-leave {
    opacity: 0;
    transform: translateX(-100%);
}
</style>
