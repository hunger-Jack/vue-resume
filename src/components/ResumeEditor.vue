<template>
  <div id="resumeEditor">
    <div class="catogray">
      <ul>
        <li v-for="(item,index) in resume.config" :key="item.field" :class="{active: item.field === selected}" @click="selected = item.field">
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
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${index}.${key}`,$event.target.value)">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/store/index'
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
          return this.$store.commit('switchTab', a)
        }
      }
    },
    methods: {
      changeResumeField(path,value) {
        this.$store.commit('updateResume', {
          path,
          value
        })
      }
    }
  }
</script>
<style scoped lang="less">
 @import url('../common/style/resumeEditor.less');
</style>
