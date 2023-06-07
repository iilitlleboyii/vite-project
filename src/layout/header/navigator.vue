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
      on-icon="CloseBold"
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
    <el-dropdown trigger="hover" @command="handleCommand">
      <svg-icon iconName="international" fontSize="30px"></svg-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <template v-for="item in dropdownItems">
            <el-dropdown-item :command="item.command">
              {{ item.text }}
            </el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-divider direction="vertical" />
    <avatar />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import IconSwitch from './icon-switch.vue'
import Avatar from './avatar.vue'
import useLocale from '@/hook/useLocale'

const { isFullscreen, toggle } = useFullscreen()
const inputValue = ref('')
const isDark = ref(false)

const { currentLocale, setLocale } = useLocale()

const dropdownItems = ref([
  {
    command: 'zh-CN',
    text: '简体中文',
  },
  {
    command: 'en-US',
    text: 'English',
  },
])
const handleCommand = (command: string) => {
  if (currentLocale.value === command) return
  setLocale(command)
}
</script>
