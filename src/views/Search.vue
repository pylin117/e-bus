<template>
  <q-page>
    <q-breadcrumbs active-color="black" class="text-black breadcrumbs">
      <q-breadcrumbs-el
        v-for="breadcrumb in breadcrumbsRoute"
        :key="breadcrumb.name"
        :label="breadcrumb.meta.title"
      />
      <q-breadcrumbs-el :label="query.name as string" />
    </q-breadcrumbs>

    <div
      class="column justify-between"
      :style="`height: ${$q.screen.height - 155}px; width: 450px`"
    >
      <div>
        <q-input
          dense
          filled
          v-model="busRouteStore.busRoute"
          placeholder="輸入公車路線 / 起迄方向名或關鍵字"
          clearable
          class="q-mt-md q-mx-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="q-pa-lg flex flex-center" style="height: 300px; background-color: #e7e7e7">
        <RouteBoard :city="(query.enName as string)"/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup name="Search">
import { useBreadcrumbStore } from '@/stores/breadcrumbStore'
import { useRoute } from 'vue-router'
import RouteBoard from '@/components/RouteBoard.vue'
import BusService from '@/service/bus.service'
import {useBusRouteStore} from '@/stores/busRouteStore'
const busRouteStore = useBusRouteStore()
const breadcrumbsRoute = useBreadcrumbStore().breadcrumbsRoute
const route = useRoute()
const busService = new BusService()
const { query } = toRefs(route)

watch(()=>busRouteStore.busRoute,()=>{
  const response = busService.busRoute(busRouteStore.city)
})
</script>

<style lang="less" scoped></style>
