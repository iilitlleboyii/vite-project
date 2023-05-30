<template>
  <div class="nav">
    <el-input v-model="inputValue" placeholder="请告诉我您需要查找什么？">
      <template #prepend>
        <el-button icon="Search" />
      </template>
    </el-input>
    <el-divider direction="vertical" />
    <icon-btn
      :title="isFullscreen ? '还原' : '全屏'"
      v-model:switch-value="isFullscreen"
      on-name="Crop"
      off-name="FullScreen"
      :handle-change="toggle"
    />
    <el-divider direction="vertical" />
    <el-switch
      v-model="isDark"
      inline-prompt
      size="large"
      active-icon="Moon"
      inactive-icon="Sunny"
    />
    <el-divider direction="vertical" />
    <avatar />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconBtn from './icon-btn.vue'
import Avatar from './avatar.vue'
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()

const inputValue = ref('')
const isDark = ref(false)
</script>
