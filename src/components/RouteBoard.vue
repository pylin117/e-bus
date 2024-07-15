<template>
    <div class="row" v-if="city.startsWith('Taipei')">
      <div class="keyboard-content-extra">
        <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
        <q-btn class="btn keyboard-btn blue" @click="inputPrefix('藍')">藍</q-btn>
        <q-btn class="btn keyboard-btn green" @click="inputPrefix('綠')">綠</q-btn>
        <q-btn class="btn keyboard-btn brown" @click="inputPrefix('棕')">棕</q-btn>
        <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('小')">小</q-btn>
        <q-btn class="btn keyboard-btn secondary">更多
          <q-popup-proxy>
            <q-list bordered separator style="width: 150px;">
              <q-item clickable v-ripple v-for="(item, index) in taipeiMoreList" :key="index">
                <q-item-section v-if="item === '其他'" class="flex items-center" v-close-popup>{{ item }}</q-item-section>
                <q-item-section v-else class="flex items-center" @click="inputPrefix(item)">{{ item }}</q-item-section>
              </q-item>
            </q-list>
          </q-popup-proxy>
        </q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('幹線')">幹線</q-btn>
      </div>
      <div>
        <Keyboard :city="city" :current-str="busRouteStore.busRoute"/>
      </div>
    </div>
    <div class="row" v-else-if="city === 'Tainan'">
      <div class="keyboard-content-extra">
        <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
        <q-btn class="btn keyboard-btn blue" @click="inputPrefix('藍')">藍</q-btn>
        <q-btn class="btn keyboard-btn green" @click="inputPrefix('綠')">綠</q-btn>
        <q-btn class="btn keyboard-btn brown" @click="inputPrefix('棕')">棕</q-btn>
        <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
        <q-btn class="btn keyboard-btn yellow" @click="inputPrefix('黃')">黃</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('H')">高鐵</q-btn>
      </div>
      <div>
        <Keyboard :city="city" :current-str="busRouteStore.busRoute"/>
      </div>
    </div>
    <div class="row" v-else-if="city === 'Kaohsiung'">
      <div class="keyboard-content-extra">
        <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('JOY')">JOY</q-btn>
        <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('幹線')">幹線</q-btn>
        <q-btn class="btn keyboard-btn yellow" @click="inputPrefix('黃')">黃</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('快線')">快線</q-btn>
      </div>
      <div>
        <Keyboard :city="city" :current-str="busRouteStore.busRoute"/>
      </div>
    </div>
    <div v-else>
      <Keyboard :city="city" :current-str="busRouteStore.busRoute"/>
    </div>
</template>

<script setup lang="ts">
import Keyboard from '@/components/Keyboard.vue'
import {useBusRouteStore} from '@/stores/busRouteStore'
const busRouteStore = useBusRouteStore()
const taipeiMoreList = ['幹線', '市民', '內科', '南軟', '花季', '貓空', '其他']
const props = defineProps({
  city: {
    type: String,
    required: true
  }
})
busRouteStore.city = props.city

function inputPrefix(value: string) {
  busRouteStore.busRoute = ''
  busRouteStore.busRoute += value
}
</script>

<style scoped>
.keyboard-btn {
  background: #d5d5d5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
.keyboard-content-extra {
  text-align: center;
  width: 140px;
  .keyboard-btn {
    width: 50px;
    margin: 0 5px 12px;
  }
}
.keyboard-btn {
  font-size: 14px;
  font-weight: 400;
  width: 57px;
  margin: 0 5px 12px;
  &.red {
    color: #fff;
    background: #e87e7e;
  }
  &.blue {
    color: #fff;
    background: #3591c5;
  }
  &.green {
    color: #fff;
    background: #5cc1a9;
  }
  &.brown {
    color: #fff;
    background: #a86556;
  }
  &.orange {
    color: #fff;
    background: #eea12e;
  }
  &.yellow {
    color: #fff;
    background: #debe4e;
  }
  &.other {
    color: #fff;
    background: #283c43;
  }
  &.secondary {
    color: #fff;
    background: #888888;
  }
}
.keyboard-moreArea {
  background: #f5f6f6;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
  top: 0;
  left: -500px;
  transition: all 0.5s linear;
  &.active {
    left: 0;
  }
}
</style>
