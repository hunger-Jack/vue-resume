<template>
  <div id="home">
    <header class="header" v-if="user.id">
      <button @click.prevent="logOut">登出</button>
      <span>你好，{{user.username}}</span>
    </header>
    <header class="header" v-else>
      <a href="javascript:void(0)" @click="setRouter('/login')">登录</a>
      <a href="javascript:void(0)" @click="setRouter('/signUp')">注册</a>
    </header>
    <main class="main">
      <div class="main-logo">
        <div>
          <img src="../common/image/resume-logo.png" alt="网站logo">
        </div>
        <div>Resume</div>
      </div>
      <div class="content-one">只要几分钟，您就能创建一份出色的简历。</div>
      <div class="content-two">轻松创建专业履历、网上档案和个人主页</div>
      <div class="word">免费制作简历</div>
      <div class="btn" @click="setRouter('/layout')">创建自己的Resume</div>
    </main>
  </div>
</template>

<script>
  import router from '../router/index'
  import AV from 'leancloud-storage'
  import getAvUser from '../lib/getAvUser'

  export default {
    name: 'Home',
    methods: {
      setRouter(path) {
        router.push(path)
      },
      logOut() {
        AV.User.logOut();
        this.$store.commit('SET_USER', getAvUser())
        window.location.reload()
      },
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }

</script>
<style lang="less" scoped>
  @import url('../common/style/home.less');

</style>
