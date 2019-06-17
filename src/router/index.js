import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '邀请首页',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/description',
      name: '活动说明',
      component: () => import('@/views/DescDetail.vue')
    },
    {
      path: '/withdraw',
      name: '活动说明',
      component: () => import('@/views/withdraw.vue')
    },
    {
      path: '/detail',
      name: '明细',
      component: () => import('@/views/Detail.vue')
    },
    {
      path: '/invite',
      name: '钱包着陆',
      component: () => import('@/views/Invite.vue')
    },
    {
      path: '/pic',
      name: '美图',
      component: () => import('@/components/BeautifulPic.vue')
    }
  ]
})
