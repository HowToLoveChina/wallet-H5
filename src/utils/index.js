
const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 手机号码中间部分隐藏
function formatPhone (phone) {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11)
}

// 邮箱只显示前三位 和@后 隐藏
function formatMail (email) {
  if (String(email).indexOf('@') > 0) {
    let str = email.split('@')
    let _s = ''
    if (str[0].length > 3) {
      for (let i = 0; i < str[0].length - 3; i++) {
        _s += '*'
      }
    }
    var newEmail = str[0].substr(0, 3) + _s + '@' + str[1]
  }
  return newEmail
}

let baseUrl = 'http://api.truewallet.net/bvCode'
export { getStore, formatPhone, baseUrl, formatMail }
// 'width:'+ ((this.width * 0.85 - 40) * 3/10) + ';height:'+ ((this.width * 0.85 - 40) *0.3) + ';position:absolute' + ';top:' + this.position.y + ';left:' + this.position.x
