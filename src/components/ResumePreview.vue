<template>
  <div id="resumePreview">
    <header>
      <h3>{{resume.profile[0].Name}}</h3>
      <h6>{{resume.profile[0].Job}}</h6>
      <img src="http://img.qq745.com/uploads/allimg/170516/14-1F516152034-52.png" alt="">
    </header>
    <main>
      <div class="content-left">
        <header>EXPERIENCE</header>
        <div class="experience" v-for="(item,index) in resume.experience" :key="index">
          <div class="experience-period">{{item.Period}}</div>
          <div class="experience-company">{{item.Company}}</div>
          <div class="experience-position">
            <i>{{item.Position}}</i>
          </div>
          <div class="experience-content">{{item.Content}}</div>
        </div>
        <header>PROJECTS</header>
        <div class="projects" v-for="item in resume.projects" :key="item.name">
          <div class="projects-name">{{item.Name}}</div>
          <div class="projects-content">{{item.Content}}</div>
        </div>
      </div>
      <div class="content-right">
        <header>EDUCATION</header>
        <div class="education" v-for="(item,index) in resume.education" :key="index">
          <div class="education-period">{{item.Period}}</div>
          <div class="education-school">{{item.School}}</div>
        </div>
        <header>SKILLS</header>
        <ul class="skills">
          <li>
            <div>HTML(5)</div>
            <div class="skills-html"></div>
          </li>
          <li>
            <div>CSS(3)</div>
            <div class="skills-css"></div>
          </li>
          <li>
            <div>JAVASCRIPT</div>
            <div class="skills-javascript"></div>
          </li>
          <li>
            <div>VUE</div>
            <div class="skills-vue"></div>
          </li>
          <li>
            <div>JQUERY</div>
            <div class="skills-jquery"></div>
          </li>
        </ul>
        <header>AWARDS</header>
        <div class="awards" v-for="item in resume.awards" :key="item.Date">
          <time class="awards-left">{{item.Date}}</time>
          <div class="awards-right">
            <div class="awards-name">{{item.Name}}</div>
            <div class="awards-content">{{item.Content}}</div>
          </div>
        </div>
        <header>CONTACT</header>
        <div class="contacts" v-for="(item,index) in resume.contacts" :key="item.QQ">
          <div v-for="(value,key) in item" :key="key">
            <span>{{key}}:</span>
            <span>{{value}}</span>
          </div>
        </div>
      </div>
    </main>
    <div class="divide-line"></div>
  </div>
</template>
<script>
  import store from '../store/index'
  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        return this.$store.state.resume
      }
    }
  }

</script>
<style lang="less" scoped>
  @import url('../common/style/resumePreview.less');
</style>
