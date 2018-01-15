<template>
  <div id="login">
    <div class="login-logo">
      <img src="../common/image/resume-logo.png" alt="网站logo" @click="setPath('/')">
    </div>
    <header class="login-header">Resume 登录</header>
    <form @submit.prevent="login" class="login-form">
      <div class="login-info">
        <input type="text" v-model="formData.username" placeholder="用户名">
        <input type="password" v-model="formData.password" placeholder="密码">
      </div>
      <div class="login-btn">
        <input type="submit" value="登录">
      </div>
    </form>
    <div class="signUp" @click="setPath('/signUp')">注册</div>
    <div class="forgetInfo">
      <div>忘记密码了吗？</div>
      <button>facebook</button>
      <button>google</button>
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
    name: 'Login',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      login() { //用户登录
        AV.User.logIn(this.formData.username, this.formData.password).then(() => {
          this.$store.commit('SET_USER', getAvUser()) //如果登录成功，更新vuex用户数据
          router.push('/layout') //如果登录成功，则跳转至’/layout‘路由
          console.log('登录成功')
        }, (error) => {
          alert(getErrorMessage(JSON.parse(JSON.stringify(error)).code))
        })
      },
      setPath(path) {
        router.push(path)
      }
    }
  }

</script>

<style lang="less" scoped>
  @import url('../common/style/login.less');
</style>
