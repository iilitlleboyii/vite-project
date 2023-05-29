<template>
  <div class="logo_title-container" title="回到首页">
    <svg-icon :iconName="iconName" fontSize="28px" color="white" />
    <span v-show="!isCollapse">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isCollapse: boolean
  title: string
  iconName: string
}>()
</script>

<style scoped lang="scss">
.logo_title-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  cursor: pointer;
}
</style>
