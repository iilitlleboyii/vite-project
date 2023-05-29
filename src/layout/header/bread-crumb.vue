<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(route, index) in matchedArr" :key="index">
      <span>{{ route.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const $route = useRoute()
const matchedArr = computed(() => $route.matched)
</script>

<style scoped lang="scss"></style>
