<template>
  <div class="keyboard-content">
    <q-btn class="btn keyboard-btn" @click="inputNumber('1')">1</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('2')">2</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('3')">3</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('4')">4</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('5')">5</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('6')">6</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('7')">7</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('8')">8</q-btn>
    <q-btn class="btn keyboard-btn" @click="inputNumber('9')">9</q-btn>
    <div class="row justify-center">
      <div v-if="city.startsWith('Taipei')">
        <q-btn class="btn keyboard-btn other" @click="inputPrefix('F')">F</q-btn>
      </div>
      <div v-else-if="city === 'Taichung'">
        <q-btn
          class="btn keyboard-btn other"
          @click="inputPrefix('專用道')"
          >專用道</q-btn
        >
      </div>
      <div v-else-if="city === 'Kaohsiung'">
        <q-btn class="btn keyboard-btn other" @click="others()">其他</q-btn>
      </div>
      <div v-else-if="city.startsWith('Other')">
        <q-btn class="btn keyboard-btn" style="height: 44px;"></q-btn>
      </div>
      <div v-else>
        <q-btn class="btn keyboard-btn other" @click="inputPrefix('L')">L</q-btn>
      </div>
      <q-btn class="btn keyboard-btn" @click="inputNumber('0')">0</q-btn>
      <q-btn class="btn keyboard-btn" @click="clearInput()">清除</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useBusRouteStore} from '@/stores/busRouteStore'
const busRouteStore = useBusRouteStore()
defineProps({
  city: {
    type: String,
    required: true
  }
})

function inputPrefix(value: string) {
  busRouteStore.busRoute = ''
  busRouteStore.busRoute += value
}

function inputNumber(value: string) {
  busRouteStore.busRoute += value
}

function clearInput() {
  busRouteStore.busRoute = ''
}

function others(){
  
}
</script>
        
<style scoped>
.keyboard-btn {
  background: #d5d5d5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  &.other {
    color: #fff;
    background: #283c43;
  }
}
.keyboard-content {
  text-align: center;
  width: 260px;
  .keyboard-btn {
    width: 65px;
    margin: 0 5px 12px;
  }
}
</style>