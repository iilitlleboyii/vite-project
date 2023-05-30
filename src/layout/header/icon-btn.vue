<template>
  <div class="icon-btn" @click="handleChange">
    <el-icon :style="{ fontSize }">
      <component :is="switchValue ? onName : offName" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    switchValue: boolean
    onName: string
    offName: string
    fontSize?: string
  }>(),
  {
    fontSize: '28px',
  },
)

const emit = defineEmits(['update:switchValue'])

const handleChange = () => {
  emit('update:switchValue', !props.switchValue)
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
