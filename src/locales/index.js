import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getStore } from '@/utils/index.js'

import zh from './zh'
import en from './en'
Vue.use(VueI18n)
console.log(getStore)
const i18n = new VueI18n({
  locale: getStore('lang') || 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
