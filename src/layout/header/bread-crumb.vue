<template>
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
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
const $route = useRoute()
const matchedArr = computed(() => {
  if ($route.matched[0].path === '/') {
    return []
  }
  return $route.matched
})
watch(
  matchedArr,
  (newValue) => {
    console.log(newValue)
  },
  {
    immediate: true,
  },
)
</script>

<style scoped lang="scss"></style>
