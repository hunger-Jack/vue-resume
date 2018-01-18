/*
获取当前用户的信息
*/
import AV from './leancloud'

export default function(user) {
    var {id, attributes:{username}} = user || AV.User.current() || {attributes:{}}
    return {id, username}
  }