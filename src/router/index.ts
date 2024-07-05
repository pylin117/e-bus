import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      meta: {
        title: '首頁',
        onBreadcrumbs: true,
        onMenu: false
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: '首頁',
            onBreadcrumbs: true,
            onMenu: false
          }
        },
        {
          path: 'nearby',
          name: 'nearby',
          component: () => import('@/views/Nearby.vue'),
          meta: {
            title: '附近站牌',
            onBreadcrumbs: true,
            onMenu: true
          }
        },
        {
          path: 'planning',
          name: 'planning',
          component: () => import('@/views/Planning.vue'),
          meta: {
            title: '路線規劃',
            onBreadcrumbs: true,
            onMenu: true
          }
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('@/views/Search.vue'),
          meta: {
            title: '站點查詢',
            onBreadcrumbs: true,
            onMenu: true
          }
        },
        {
          path: 'collection',
          name: 'collection',
          component: () => import('@/views/Collection.vue'),
          meta: {
            title: '我的收藏',
            onBreadcrumbs: true,
            onMenu: true
          }
        }
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
