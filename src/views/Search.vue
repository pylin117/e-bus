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
          v-model="busRoute"
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
        <Keyboard :city="(query.enName as string)" @input="updateInput" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup name="Search">
import { useBreadcrumbStore } from '@/stores/breadcrumbStore'
import { useRoute } from 'vue-router'
import Keyboard from '@/components/Keyboard.vue'

const breadcrumbsRoute = useBreadcrumbStore().breadcrumbsRoute
const route = useRoute()
const { query } = toRefs(route)
const busRoute = ref('')

function updateInput(params: any) {
  busRoute.value = params.input
}

</script>

<style lang="less" scoped></style>
