import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isVisible: false,
    selected: 'profile',
    user: {
      username: '',
      id: ''
    },
    resume: {
      config: [{
          field: 'profile',
          icon: 'id'
        },
        {
          field: 'experience',
          icon: 'work'
        },
        {
          field: 'education',
          icon: 'book'
        },
        {
          field: 'projects',
          icon: 'heart'
        },
        {
          field: 'awards',
          icon: 'cup'
        },
        {
          field: 'contacts',
          icon: 'phone'
        },
      ],
      profile: [{
        Name: 'JACK HUNGER',
        Job: 'FRONT-END DEVELOPMENT  ENGINEER',
        City: 'Shanghai China',
        Projects: 'Web前端',
      }],
      experience: [{
          Company: 'alibaba in hengzhou zhejiang',
          Content: 'web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds',
          Period: '2012~2014',
          Position: 'font-end development'
        },
        {
          Company: 'alibaba in hengzhou zhejiang',
          Content: 'web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds',
          Period: '2014~2016',
          Position: 'font-end development'
        }, {
          Company: 'alibaba in hengzhou zhejiang',
          Content: 'web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds',
          Period: '2016~2017',
          Position: 'font-end development'
        }, {
          Company: 'alibaba in hengzhou zhejiang',
          Content: 'web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds',
          Period: '2017~now',
          Position: 'font-end development'
        },
      ],
      education: [{
        Period: '2009~2012',
        School: 'DJIDF JLJFDFF'
        },
        {
          Period: '2006~2009',
          School: 'SDDSI SDSD'
        },
      ],
      projects: [{
          Name: 'VUE单页应用',
          Content: '使用vue写的一个简历的单页应用，可以兼容手机端'
        },
        {
          Name: '原生JS瀑布流懒加载',
          Content: '使用面向对象写的一个demo，主要突出面向对象的思想'
        },
      ],
      awards: [{
          Name: 'SDFJKLD',
          Content: 'SDFDJSF jkl jf fdsf jfdsl fjkd sf',
          Date: '2013'
        },
        {
          Name: 'DFJKSDFJ',
          Content: 'fds fdsa fdafdsafj afjasf jflsa fjkdsa fj',
          Date: '2015'
        },
      ],
      contacts: [{
          Addr: 'FJDKSF fjsdkfSDFKLf fjsdf jfdsjfds',
          TEl: 12345678909,
          QQ: '2432432',
          Email: '42141432@qq.com',
          Web: 'www.jirengu.com',
          Blog: 'www.jianshu.com/jack',
          Github: 'www.github.com/jack'
        },
      ],
    },
  },
  mutations,
})
