<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-white">
      <q-toolbar class="flex justify-between" style="padding: 16px 32px">
        <div class="row items-center cursor-pointer" @click="router.push({ name: 'home' })">
          <q-img src="@/assets/icons/logo.svg" width="35px" class="q-mr-sm" />
          <div class="column">
            <div class="text-black text-bold" style="font-size: 12px">台灣公車e點通</div>
            <div class="text-black" style="font-size: 10px">Taiwan Bus+</div>
          </div>
        </div>
        <div class="row">
          <q-list v-for="(menu, index) in menuList" :key="index" class="custom-list">
            <q-btn
              stretch
              flat
              :label="menu.meta?.title"
              @click="menuClick(menu.name)"
              class="text-black"
            />
          </q-list>
        </div>
        <div class="row items-center">
          <q-icon name="language" color="black" size="20px" />
          <q-list>
            <q-btn stretch flat dense label="中文" class="text-black" />
            <span class="text-black">|</span>
            <q-btn stretch flat dense label="英文" class="text-black" />
          </q-list>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background-color: #444444">
      <q-toolbar class="flex flex-center">
        <div>Copyright © 2024 台灣公車 e 點通 All rights reserved.</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup name="Main">
import { useRouter } from 'vue-router'
import _ from 'lodash'
const router = useRouter()
const menuList = ref(
  _.map(
    _.filter(
      _.find(router.options.routes, (route: any) => route.name === 'main')?.children!,
      (route: any) => route.meta?.onMenu === true
    ),
    (item: any) => {
      return item
    }
  )
)

function menuClick(name: string) {
  router.push({ name: name })
}
</script>

<style lang="less" scoped></style>
