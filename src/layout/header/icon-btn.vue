<template>
  <div class="icon-btn" @click="handleChange">
    <el-icon :style="{ fontSize }">
      <component :is="switchValue ? onIcon : offIcon" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    switchValue: boolean
    onIcon: string
    offIcon: string
    fontSize?: string
    handleChange?: () => void
  }>(),
  {
    fontSize: '28px',
  },
)
const emit = defineEmits(['update:switchValue'])
const handleChange = () => {
  if (props.handleChange) {
    props.handleChange()
  } else {
    emit('update:switchValue', !props.switchValue)
  }
}
</script>

<style scoped lang="scss">
.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
