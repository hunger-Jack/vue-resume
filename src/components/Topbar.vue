<template>
  <div id="topbar">
    <a href="javascript:void(0)" class="theme" @click="setRouter('/')">Resume</a>
    <div class="space"></div>
    <div class="userInfo" v-if="user.id">
      <span>你好，{{user.username}}</span>
      <button @click.prevent="logOut">登出</button>
    </div>
    <div v-else class="userInfo">
      <a href="javascript:void(0)" @click="setRouter('/login')">登录</a>
      <a href="javascript:void(0)" @click="setRouter('/signUp')">注册</a>
    </div>
    <div class="saveOrPreview" v-if="user.id">
      <button class="btn save" @click="getData">保存</button>
      <button class="btn pre" @click="onPreviw">预览</button>
    </div>

  </div>
</template>
<script>
  import getAvUser from '../lib/getAvUser'
  import AV from '../lib/leancloud'
  import router from '../router/index'
  import axios from 'axios'
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
        window.location.reload()
      },
      setRouter(path) {
        router.push(path)
      },
    },
    created() {
      this.$store.commit('SET_USER', getAvUser())
    }
  }

</script>
<style scoped lang="less">
  @import url('../common/style/topbar.less');

</style>
