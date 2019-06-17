//  获取localstorage
const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 手机号码中间部分隐藏
function formatPhone (phone) {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11);
}
export { getStore, formatPhone }
