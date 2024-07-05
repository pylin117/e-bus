<template>
  <div class="route-search-keyboard">
    <div class="keyboard-content-taipei" v-if="city.startsWith('Taipei')">
      <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
      <q-btn class="btn keyboard-btn blue" @click="inputPrefix('藍')">藍</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('1')">1</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('2')">2</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('3')">3</q-btn>
      <q-btn class="btn keyboard-btn green" @click="inputPrefix('綠')">綠</q-btn>
      <q-btn class="btn keyboard-btn brown" @click="inputPrefix('棕')">棕</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('4')">4</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('5')">5</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('6')">6</q-btn>
      <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
      <q-btn class="btn keyboard-btn yellow" @click="inputPrefix('黃')">黃</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('7')">7</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('8')">8</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('9')">9</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('F')">F</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('小')">小</q-btn>
      <q-btn class="btn keyboard-btn other" @click="showMoreArea()">其他</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('0')">0</q-btn>
      <q-btn class="btn keyboard-btn" @click="clearInput()">清除</q-btn>
      <div class="keyboard-moreArea">
        <q-btn class="btn keyboard-btn other" @click="showMoreArea()">返回</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('幹線')">幹線</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('跳蛙')">跳蛙</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('南軟')">南軟</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('內科')">內科</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('市民')">市民</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('花季')">花季</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('貓空')">貓空</q-btn>
      </div>
    </div>
    <div class="keyboard-content-taipei" v-else-if="city === 'Tainan'">
      <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
      <q-btn class="btn keyboard-btn blue" @click="inputPrefix('藍')">藍</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('1')">1</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('2')">2</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('3')">3</q-btn>
      <q-btn class="btn keyboard-btn green" @click="inputPrefix('綠')">綠</q-btn>
      <q-btn class="btn keyboard-btn brown" @click="inputPrefix('棕')">棕</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('4')">4</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('5')">5</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('6')">6</q-btn>
      <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
      <q-btn class="btn keyboard-btn yellow" @click="inputPrefix('黃')">黃</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('7')">7</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('8')">8</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('9')">9</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('H')">H</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('雙層')">雙層</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('幹線')">幹線</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('0')">0</q-btn>
      <q-btn class="btn keyboard-btn" @click="clearInput()">清除</q-btn>
    </div>
    <div class="keyboard-content-taipei" v-else-if="city === 'Kaohsiung'">
      <q-btn class="btn keyboard-btn red" @click="inputPrefix('紅')">紅</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('JOY')">JOY</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('1')">1</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('2')">2</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('3')">3</q-btn>
      <q-btn class="btn keyboard-btn orange" @click="inputPrefix('橘')">橘</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('幹線')">幹線</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('4')">4</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('5')">5</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('6')">6</q-btn>
      <q-btn class="btn keyboard-btn yellow" @click="inputPrefix('黃')">黃</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('觀光')">觀光</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('7')">7</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('8')">8</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('9')">9</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('T')">T</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('E')">E</q-btn>
      <q-btn class="btn keyboard-btn secondary" @click="showMoreArea()">其他</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('0')">0</q-btn>
      <q-btn class="btn keyboard-btn" @click="clearInput()">清除</q-btn>
      <div class="keyboard-moreArea">
        <q-btn class="btn keyboard-btn other" @click="showMoreArea()">返回</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('大湖')">大湖</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('燕巢')">燕巢</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('永安')">永安</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('鼓山')">鼓山</q-btn>
        <q-btn class="btn keyboard-btn secondary" @click="inputPrefix('大寮')">大寮</q-btn>
      </div>
    </div>
    <div class="keyboard-content" v-else>
      <q-btn class="btn keyboard-btn" @click="inputNumber('1')">1</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('2')">2</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('3')">3</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('4')">4</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('5')">5</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('6')">6</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('7')">7</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('8')">8</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('9')">9</q-btn>
      <q-btn
        class="btn keyboard-btn other"
        @click="inputPrefix('專用道')"
        v-if="city === 'Taichung'"
        >專用道</q-btn
      >
      <q-btn class="btn keyboard-btn other" @click="inputPrefix('L')" v-else>L</q-btn>
      <q-btn class="btn keyboard-btn" @click="inputNumber('0')">0</q-btn>
      <q-btn class="btn keyboard-btn" @click="clearInput()">清除</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  city: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['input'])
const currentStr = ref('')

function inputPrefix(value: string) {
  currentStr.value = ''
  currentStr.value += value
}

function inputNumber(value: string) {
  currentStr.value += value
}

function clearInput() {
  currentStr.value = ''
}

function showMoreArea() {
  // document.querySelector('.keyboard-moreArea').classList.toggle('active')
}

watch(
  () => currentStr.value,
  (value) => {
    console.log(value)
    emits('input', { input: value })
  },
  { deep: true }
)
</script>

<style scoped>
.keyboard-btn {
  background: #d5d5d5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
.keyboard-content-taipei {
  max-width: 375px;
  text-align: center;
  padding: 0 18px;
  position: relative;
  overflow: hidden;
  .keyboard-btn {
    width: 57px;
    margin: 0 5px 12px;
  }
}
.keyboard-content {
  max-width: 375px;
  text-align: center;
  padding: 0 18px;
  .keyboard-btn {
    width: 70px;
    margin: 0 8px 12px;
  }
}
.keyboard-btn {
  font-size: 14px;
  font-weight: 400;
  width: 70px;
  margin: 0 8px 12px;
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
