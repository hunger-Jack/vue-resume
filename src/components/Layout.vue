<template>
  <div class="home">
    <div class="page">
      <transition name="slideUpDown">
        <header :class="{active:isVisible == true}" v-if="!isVisible">
          <Topbar></Topbar>
        </header>
      </transition>
      <main>
        <transition name="slideLeftRight">
          <ResumeEditor :class="{active:isVisible == true}" v-if="!isVisible"></ResumeEditor>
        </transition>
        <ResumePreview></ResumePreview>
      </main>
    </div>
    <el-button type="info" class="goBack" @click="onBack" v-if="isVisible == true">返回</el-button>
    <el-button class="snip" v-if="isVisible == true" @click="captureScreenshots">Screenshots</el-button>
  </div>
</template>

<script>
  import "normalize.css/normalize.css";
  import "@/assets/reset.css";
  import Topbar from "@/components/Topbar";
  import ResumeEditor from "@/components/ResumeEditor";
  import ResumePreview from "@/components/ResumePreview";
  import Login from '@/components/Login'
  import icons from '@/assets/icons'
  import html2canvas from '../assets/html2canvas'
  import FileSaver from 'file-saver'
  export default {
    name: "Layout",
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview,
      Login
    },
    computed: {
      isVisible() {
        return this.$store.state.isVisible
      }
    },
    methods: {
      onBack() {
        this.$store.state.isVisible = false
      },
      captureScreenshots() {
        let resume = document.querySelector('#resumePreview')
        html2canvas(resume).then(function (canvas) {
          canvas.toBlob(function (blob) {
            FileSaver.saveAs(blob, 'Resume.png')
          })
        })
      },
    },

    created() {
      document.body.insertAdjacentHTML('afterbegin', icons)
    }
  };

</script>
<style lang="less" scoped>
  @import url('../common/style/layout.less');

</style>
