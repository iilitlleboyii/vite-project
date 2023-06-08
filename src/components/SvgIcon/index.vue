<template>
  <div>
    <svg class="use-svg" aria-hidden="true" :style="{ fontSize }">
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
    fontSize?: string
  }>(),
  {
    color: 'black',
    fontSize: '20px',
  },
)

const xlink_href = computed(() => {
  return '#icon-' + props.iconName
})
</script>

<style scoped lang="scss">
.use-svg {
  width: 1em;
  height: 1em;
}
</style>
