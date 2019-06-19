
const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 手机号码中间部分隐藏
function formatPhone (phone) {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11)
}

let baseUrl = 'http://api.truewallet.net/bvCode'
export { getStore, formatPhone, baseUrl }
// 'width:'+ ((this.width * 0.85 - 40) * 3/10) + ';height:'+ ((this.width * 0.85 - 40) *0.3) + ';position:absolute' + ';top:' + this.position.y + ';left:' + this.position.x
