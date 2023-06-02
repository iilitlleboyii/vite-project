<template>
  <el-tabs
    v-model="activeRoute"
    type="card"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
  >
    <template v-for="route in loadedRoutes">
      <el-tab-pane :name="route.name">
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
import { useRoute } from 'vue-router'

const $menuStore = useMenuStore()
const { activeRoute, loadedRoutes } = storeToRefs($menuStore)

const $route = useRoute()

watch(
  () => $route.name,
  (newValue) => {
    if (loadedRoutes.value.some((route) => route.name === newValue)) return
    loadedRoutes.value.push({
      name: $route.name as string,
      title: $route.meta.title as string,
    })
    activeRoute.value = $route.name as string
  },
)
const tabClick = (tab: any) => {}
const tabRemove = (tab: any) => {}
</script>

<style scoped lang="scss"></style>
