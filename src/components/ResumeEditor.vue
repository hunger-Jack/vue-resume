<template>
  <div id="resumeEditor">
    <div class="catogray">
      <ul>
        <li v-for="item in resume.config" :key="item.field" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ul>
    </div>
    <div class="panels">
      <ul>
        <li v-for="item in resume.config" v-show="item.field === selected" :key="item.id">
          <div class="subitem" v-for="(subitem,index) in resume[item.field]" :key="index">
            <div class="resumeField" v-for="(value,key) in subitem" :key="key">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${index}.${key}`,$event.target.value)" placeholder="23432432">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/store/index'
  import getAvUser from '../lib/getAvUser'
  import AV from 'leancloud-storage'
  import saveOrUpdateResumeData from '../lib/saveOrUpdateResumeData'

  export default {
    name: "ResumeEditor",
    computed: {
      resume() {
        return this.$store.state.resume
      },
      selected: {
        get() {
          return this.$store.state.selected
        },
        set(a) {
          return this.$store.commit('SWITCH_TAB', a)
        }
      }
    },
    methods: {
      changeResumeField(path, value) {
        if ((getAvUser().id) == undefined) {
          alert('请先登录账号，在使用功能哦~~')
          return
        }
        this.$store.commit('UPDATE_RESUME', {
          path,
          value
        })
      },
      fetchResume() {//如果用户刚进来检测到已经登录账号，拉取leancloud数据和对应id，存储到state.resume
        var vm = this
        if (getAvUser()) {
          var query = new AV.Query('Resume');
          query.find()
            .then((resume) => {
              let avResume = resume[0]
              console.log(avResume)
              let id = avResume.id
              this.$store.state.resume = JSON.parse(avResume.attributes.content)
              this.$store.state.resume.id = id
            }, function (error) {
              console.error(error)
            })
        }
      },
    },
    created() {
      this.fetchResume()
    }
  }

</script>
<style scoped lang="less">
  @import url('../common/style/resumeEditor.less');

</style>
