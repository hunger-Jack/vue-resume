<template>
  <div id="home">
    <header class="header">
      <a href="javascript:void(0)" @click="login">登录</a>
      <a href="javascript:void(0)" @click="signUp">注册</a>
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
      <div class="btn">创建自己的Resume</div>
    </main>
  </div>
</template>

<script>
  import router from '../router/index'
  export default {
    name: 'Home',
    methods: {
      signUp() {
        router.push('/signUp')
      },
      login() {
        router.push('/login')
      }
    }
  }

</script>
<style lang="less" scoped>
 @import url('../common/style/home.less');

</style>
