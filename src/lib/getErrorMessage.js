/*
如果用户注册时，注册信息错误，给出错误提示
*/
const map = {
    202: '用户名已被占用',
    210: '用户名和密码不匹配',
    211: '用户名不存在',
    217: '无效的用户名',
    219: '超过登录次数限制，20分钟之后再次尝试',
    unknown: '请求失败，请稍后再试'
}

export default function({code}) {
    return map[code] || map.unknown
}