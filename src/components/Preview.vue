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
              <div :class="item.Name" :style="{width:item.Proficiency}"></div>
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
    <footer class="hobbies">
      <div class="hobbies-header">HOBBIES :</div>
      <div class="hobbies-content" >
        <label v-for="(item,index) in resume.hobbies" :key="index">
          <input type="checkbox" checked='checked'> {{item.Hobby || 'Hobby'}}
        </label>
      </div>
    </footer>
    <a href="javascript:viod(0)" class="resume-home" @click="setPath('/')">Resume</a>
  </div>
</template>
<script>
import router from '../router/index'
  export default {
    name: 'Preview',
    computed: {
      resume() {
        return this.$store.state.resume
      },
    },
    methods: {
      setPath(path) {
        router.push(path)
      }
    }
  }

</script>
<style lang="less" scoped>
  @import url('../common/style/resumePreview.less');
  #resumePreview {
    width: 81%;
    margin: 64px auto;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.25);
    .resume-home {
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 28px;
      text-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
      font-family: 'ABeeZee', sans-serif;
    }
  }
</style>
