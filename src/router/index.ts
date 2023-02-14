import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
import routes from './routes'
import { useCachedViewStoreHook } from '@/store/modules/cachedView'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
    noCache?: boolean
  }
}

router.beforeEach((to: toRouteType, from, next) => {
  console.log('beforeEach to:', to)
  document.title = (to?.meta?.title as string) || document.title
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to)
  next()
})

export default router
