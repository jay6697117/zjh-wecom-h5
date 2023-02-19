import Layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    // redirect: '/home',
    // redirect: '/base',
    redirect: '/ts',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '主页',
          noCache: true,
          noNav: true
        }
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: '案例',
          noCache: true,
          noNav: false
        }
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: '工具',
          noCache: false,
          noNav: false
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于',
          noCache: true,
          noNav: false
        }
      },
      {
        path: '/base',
        name: 'Base',
        component: () => import('@/views/base/index.vue'),
        meta: {
          title: '基础',
          noCache: false,
          noNav: true,
          noTabbar: true
        }
      },
      {
        path: '/ts',
        name: 'Ts',
        component: () => import('@/views/ts/index.vue'),
        meta: {
          title: 'Ts',
          noCache: false,
          noNav: true,
          noTabbar: true
        }
      }
    ]
  }
]

export default routes
