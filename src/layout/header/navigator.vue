<template>
  <div class="nav">
    <el-input v-model="inputValue" placeholder="请告诉我您需要查找什么？">
      <template #prepend>
        <el-button icon="Search" />
      </template>
    </el-input>
    <el-divider direction="vertical" />
    <icon-switch
      :title="isFullscreen ? '退出全屏' : '全屏'"
      v-model:switch-value="isFullscreen"
      on-icon="Crop"
      off-icon="FullScreen"
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
import { useFullscreen } from '@vueuse/core'
import IconSwitch from './icon-switch.vue'
import Avatar from './avatar.vue'

const { isFullscreen, toggle } = useFullscreen()
const inputValue = ref('')
const isDark = ref(false)
</script>
