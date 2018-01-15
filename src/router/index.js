import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Preview from '@/components/Preview'
export default new Router({
  // mode: 'history',
  // base: __dirname,
  routes: [{
      path: '/',
      name: 'Home',
      components: {
        Home: Home
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        Login: Login
      }
    },
    {
      path: '/signUp',
      name: 'SignUp',
      components: {
        SignUp: SignUp
      }
    },
    {
      path: '/layout',
      name: 'Layout',
      components: {
        Layout: Layout
      }
    },
    {
      path: '/preview',
      name: 'Preview',
      components: {
        Preview: Preview
      }
    },
  ]
})
