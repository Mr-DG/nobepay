import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register/index.vue')
    },
    // 会员中心
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/member/index.vue')
    },
    // 卡片管理
    {
      path: '/openCard',
      name: 'openCard',
      component: () => import('@/views/card/openCard/index.vue')
    },
    {
      path: '/cardList',
      name: 'cardList',
      component: () => import('@/views/card/cardList/index.vue')
    },
    // 在线客服
    {
      path: '/customerService',
      name: 'customerService',
      component: () => import('@/views/customerService/index.vue')
    }
  ]
})

export default router
