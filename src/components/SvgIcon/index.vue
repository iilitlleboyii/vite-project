<template>
  <div>
    <svg aria-hidden="true" :style="{ width, height }">
      <use :xlink:href="xlink_href" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    iconName: string
    color?: string
    width?: string
    height?: string
  }>(),
  {
    color: 'red',
    width: '20px',
    height: '20px',
  },
)

const xlink_href = computed(() => {
  return '#icon-' + props.iconName
})
</script>

<style scoped></style>
