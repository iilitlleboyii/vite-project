<template>
  <template v-for="item in menuItems" :key="item.path">
    <!-- 如果没有子路由 -->
    <el-menu-item v-if="!item.children" :index="item.path">
      <el-icon><Location /></el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 如果有子路由 -->
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归菜单组件 -->
      <MenuItem :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItem } from '@/types'

const props = defineProps(['menuList'])
const filterHidden = (arr: MenuItem[]) => {
  const stack = [...arr]
  while (stack.length) {
    const item = stack.pop()
    if (item) {
      if (item.hidden) {
        if (item.children?.length) {
          item.children = item.children.filter(
            (child: MenuItem) => !child.hidden,
          )
        }
      } else if (item.children?.length) {
        item.children.forEach((child: MenuItem) => stack.push(child))
      }
    }
  }
  return arr.filter((item: MenuItem) => !item.hidden)
}
const menuItems = computed(() => filterHidden(props.menuList))
</script>

<style scoped lang="scss"></style>
