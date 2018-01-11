<template>
  <div id="topbar">
    <a href="javascript:voild(0)" class="theme">Resume</a>
    <div class="space"></div>
    <div class="userInfo" v-if="user.id">
      <span>你好，{{user.username}}</span>
      <button @click.prevent="logOut">登出</button>
    </div>
    <div v-else class="userInfo">
      <a href="javascript:voild(0)" @click="login">登录</a>
      <a href="javascript:voild(0)" @click="signUp">注册</a>
    </div>
    <button class="btn save">保存</button>
    <button class="btn pre" @click="onPreviw">预览</button>
  </div>
</template>
<script>
  import getAvUser from '../lib/getAvUser'
  import AV from '../lib/leancloud'
  import router from '../router/index'
  export default {
    name: 'Topbar',
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      onPreviw() {
        this.$store.state.isVisible = true
      },
      logOut() {
        AV.User.logOut();
        this.$store.commit('SET_USER', getAvUser())
      },
      login() {
        router.push('/login')
      },
      signUp() {
        router.push('/signUp')
      }
    },
    created() {
      this.$store.commit('SET_USER', getAvUser())
    }
  }

</script>
<style scoped lang="less">
  @import url('../common/style/topbar.less');

</style>
