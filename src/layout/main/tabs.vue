<template>
  <el-tabs
    v-model="activeRoute"
    type="card"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
  >
    <template v-for="route in loadedRoutes">
      <el-tab-pane :name="route.name" :closable="route.name !== 'home'">
        <template #label>
          <el-icon v-show="route.name === activeRoute">
            <CollectionTag />
          </el-icon>
          <span>{{ route.title }}</span>
        </template>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useMenuStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const $menuStore = useMenuStore()
const { activeRoute, loadedRoutes } = storeToRefs($menuStore)

const $route = useRoute()
const $router = useRouter()

watch(
  $route,
  (newValue) => {
    activeRoute.value = newValue.name as string
    if (loadedRoutes.value.some((route) => route.name === newValue.name)) return
    loadedRoutes.value.push({
      name: newValue.name as string,
      title: newValue.meta.title as string,
    })
  },
  {
    immediate: true,
  },
)

const tabClick = (tab: any) => {
  $router.replace({ name: tab.paneName })
}
const tabRemove = (name: string) => {
  if (name === activeRoute.value) {
    loadedRoutes.value.forEach((route, index) => {
      if (route.name === name) {
        const nextRoute =
          loadedRoutes.value[index + 1] || loadedRoutes.value[index - 1]
        if (nextRoute) {
          $router.replace({ name: nextRoute.name })
        }
      }
    })
  }
  loadedRoutes.value = loadedRoutes.value.filter((route) => route.name !== name)
}
</script>

<style scoped lang="scss"></style>
