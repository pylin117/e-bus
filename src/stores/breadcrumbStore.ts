import { defineStore } from 'pinia'
import { useRoute, type RouteLocationMatched } from 'vue-router'
import _ from 'lodash'

export const useBreadcrumbStore = defineStore('breadcrumb', () => {
  const route = useRoute()

  const breadcrumbsRoute = computed((): any => {
    return _.filter(route.matched, (matched: RouteLocationMatched) => matched.meta?.onBreadcrumbs)
  })

  return {
    breadcrumbsRoute
  }
})
