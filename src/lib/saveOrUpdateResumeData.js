import store from '../store/index'
import AV from 'leancloud-storage'

function saveResumeData() {
    console.log(1)
    let dataString = JSON.stringify(store.state.resume)
    var AVResume = AV.Object.extend('Resume')
    var avResume = new AVResume()
    var acl = new AV.ACL()
    acl.setWriteAccess(AV.User.current(),true)
    acl.setReadAccess(AV.User.current(),true)
    avResume.set('content', dataString)
    avResume.setACL(acl)
    avResume.save().then((resume) => {
        store.state.resume.id = resume.id
      console.log('保存成功')
    }, function (error) {
      console.log('保存失败')
    })
  }
  function updateResumeData() {
      console.log(2)
    let dataString = JSON.stringify(store.state.resume)
    // 第一个参数是 className，第二个参数是 objectId
    var avResume = AV.Object.createWithoutData('Resume', store.state.resume.id);
    // 修改属性
    avResume.set('content', dataString);
    // 保存到云端
    avResume.save().then(() => {
      console.log('更新数据成功')
    });
  }
  function saveOrUpdateResumeData() {
      console.log(3)
    if (store.state.resume.id) {
      updateResumeData()
    } else {
      saveResumeData()
    }
  }

  export default saveOrUpdateResumeData