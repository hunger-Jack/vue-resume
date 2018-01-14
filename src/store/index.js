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
        },{
          field: 'skills',
          icon: 'skill'
        }
      ],
      skills: [{
        Name: '',
        Proficiency: '',
      },{
        Name: '',
        Proficiency: '',
      },{
        Name: '',
        Proficiency: '',
      },{
        Name: '',
        Proficiency: '',
      },{
        Name: '',
        Proficiency: '',
      }],
      profile: [{
        Name: '',
        Job: '',
        City: '',
        Projects: '',
      }],
      experience: [{
          Company: '',
          Content: '',
          Period: '',
          Position: ''
        },
        {
          Company: '',
          Content: '',
          Period: '',
          Position: ''
        }, {
          Company: '',
          Content: '',
          Period: '',
          Position: ''
        }, {
          Company: '',
          Content: '',
          Period: '',
          Position: ''
        },
      ],
      education: [{
        Period: '',
        School: ''
        },
        {
          Period: '',
          School: ''
        },
      ],
      projects: [{
          Name: '',
          Content: ''
        },
        {
          Name: '',
          Content: ''
        },
      ],
      awards: [{
          Name: '',
          Content: '',
          Date: '',
        },
        {
          Name: '',
          Content: '',
          Date: '',
        },
      ],
      contacts: [{
          Addr: '',
          TEl: '',
          QQ: '',
          Email: '',
          Web: '',
          Blog: '',
          Github: ''
        },
      ],
    },
  },
  mutations,
})
