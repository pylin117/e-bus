<template>
  <q-page>
    <q-img src="@/assets/images/Thumbnail.jpg" style="width: 100%; height: 500px" />
    <div class="row flex-center q-gutter-md q-my-sm">
      <q-card
        v-for="(city, index) in cities"
        :key="index"
        class="flex flex-center q-mb-md cursor-pointer"
        style="width: 15%; aspect-ratio: 1.5/1"
        @click="router.push({ name: 'search', query: { name: city.name, enName: city.enName } })"
      >
        <div class="column flex-center" :style="{ color: city.color }">
          <q-icon name="sym_o_directions_bus" size="40px" />
          <div class="text-bold" style="font-size: 16px">{{ city.name }}</div>
          <div style="font-size: 12px">{{ city.enName }}</div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup name="Home">
import { useRouter } from 'vue-router'

const router = useRouter()
const cities = [
  {
    name: '台北市/新北市',
    enName: 'Taipei/NewTaipei',
    color: '#283C43'
  },
  {
    name: '桃園市',
    enName: 'Taoyuan',
    color: '#3591C5'
  },
  {
    name: '台中市',
    enName: 'Taichung',
    color: '#D08181'
  },
  {
    name: '台南市',
    enName: 'Tainan',
    color: '#7FC0C5'
  },
  {
    name: '高雄市',
    enName: 'Kaohsiung',
    color: '#5E9BAE'
  },
  {
    name: '其他地區',
    enName: 'Other City',
    color: '#52797C'
  }
]
</script>

<style lang="less" scoped></style>
