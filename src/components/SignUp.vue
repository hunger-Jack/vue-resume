<template>
  <div id="signUp">
    <div class="signUp-logo">
      <img src="../common/image/resume-logo.png" alt="网站logo" @click="setPath('/')">
    </div>
    <header class="signUp-header">马上制作Resume</header>
    <form @submit.prevent="signUp" class="signUp-form">
      <div class="signUp-info">
        <input type="text" v-model="formData.username" placeholder="用户名">
        <input type="password" v-model="formData.password" placeholder="密码">
      </div>
      <div class="signUp-btn">
        <input type="submit" value="注册">
      </div>
    </form>
    <div class="login">已有账号了?
      <a href="javascript:void(0)" @click.prevent="setPath('/login')">登录</a>
    </div>
    <footer class="footer">
      <p>使用RESUME，即表示您同意我们的服务条款</p>
      <p>
        <a href="javascript:void(0)">隐私</a>
        <a href="javascript:void(0)">服务条款</a>
      </p>
    </footer>
  </div>
</template>

<script>
  import router from '../router/index'
  import store from '../store/index'
  import AV from '../lib/leancloud'
  import getAvUser from '../lib/getAvUser'
  import getErrorMessage from '../lib/getErrorMessage'
  export default {
    name: 'signUp',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      signUp() { //注册用户信息
        var user = new AV.User()
        user.setUsername(this.formData.username)
        user.setPassword(this.formData.password)
        user.signUp().then((loginedUser) => {
          this.$store.commit('SET_USER', getAvUser()) //如果注册成功，更新vuex用户数据。
          router.push('Layout')
          console.log('注册成功了')
        }, (error) => {
          alert(getErrorMessage(error))
        })
      },
      setPath(path) {
        router.push(path)
      }
    },
  }

</script>

<style lang="less" scoped>
  @import url('../common/style/signUp.less');

</style>
