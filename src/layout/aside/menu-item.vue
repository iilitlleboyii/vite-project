<template>
  <menu-link v-if="!item.children" :item="item" />
  <menu-link v-else-if="item.children.length === 1" :item="item.children[0]" />
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </template>
    <menu-item v-for="child in item.children" :key="child.path" :item="child" />
  </el-sub-menu>
</template>

<script setup lang="ts">
import MenuLink from './menu-link.vue'
import type { MenuItemType } from '@/types'
defineProps<{
  item: MenuItemType
}>()
</script>
