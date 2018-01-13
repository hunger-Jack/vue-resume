<template>
  <div id="resumePreview">
    <header>
      <h3>{{resume.profile[0].Name || 'Your Name'}}</h3>
      <h6>{{resume.profile[0].Job || 'Your Job'}}</h6>
      <img src="http://img.qq745.com/uploads/allimg/170516/14-1F516152034-52.png" alt="">
    </header>
    <main>
      <div class="content-left">
        <header>EXPERIENCE</header>
        <div class="experience" v-for="(item,index) in resume.experience" :key="index">
          <div class="experience-period">{{item.Period || 'Period of EXPERIENCE'}}</div>
          <div class="experience-company">{{item.Company || 'Company\'s name'}}</div>
          <div class="experience-position">
            <i>{{item.Position}}</i>
          </div>
          <div class="experience-content">{{item.Content || 'Content'}}</div>
        </div>
        <header>PROJECTS</header>
        <div class="projects" v-for="item in resume.projects" :key="item.name">
          <div class="projects-name">{{item.Name || 'PROJECTS\'s Name'}}</div>
          <div class="projects-content">{{item.Content || 'Content'}}</div>
        </div>
      </div>
      <div class="content-right">
        <header>EDUCATION</header>
        <div class="education" v-for="(item,index) in resume.education" :key="index">
          <div class="education-period">{{item.Period || 'Period of EDUCATION'}}</div>
          <div class="education-school">{{item.School || 'School\'s name'}}</div>
        </div>
        <header>SKILLS</header>
        <ul class="skills">
          <li v-for="(item,index) in resume.skills" :key="index">
            <div class="skills-name">{{item.Name || 'Name of Language'}}</div>
            <div class="skills-proficiency">
              <div v-bind:class="item.Name" :style="{width:item.Proficiency}"></div>
            </div>
          </li>
        </ul>
        <header>AWARDS</header>
        <div class="awards" v-for="item in resume.awards" :key="item.idx">
          <time class="awards-left">{{item.Date || 'Date of AWARDS'}}</time>
          <div class="awards-right">
            <div class="awards-name">{{item.Name || 'Name of AWARDS'}}</div>
            <div class="awards-content">{{item.Content || 'Content'}}</div>
          </div>
        </div>
        <header>CONTACT</header>
        <div class="contacts" v-for="item in resume.contacts" :key="item.QQ">
          <div v-for="(value,key) in item" :key="key">
            <span>{{key}}:</span>
            <span>{{value || 'Contact'}}</span>
          </div>
        </div>
      </div>
    </main>
    <div class="divide-line"></div>
  </div>
</template>
<script>
  import store from '../store/index'
  import saveOrUpdateResumeData from '../lib/saveOrUpdateResumeData'
  import getAvUser from '../lib/getAvUser'

  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        return this.$store.state.resume
      },

    },
  }

</script>
<style lang="less" scoped>
  @import url('../common/style/resumePreview.less');

</style>
