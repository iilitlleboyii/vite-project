<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="route in matchedArr">
        <el-breadcrumb-item
          v-if="route.meta.breadCrumb"
          :to="{ path: route.path }"
        >
          {{ route.meta.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{ route.meta.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const $route = useRoute()
const matchedArr = computed(() => {
  if ($route.matched[0].path === '/') {
    return []
  }
  return $route.matched
})
</script>
