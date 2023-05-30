<template>
  <div>
    <el-popover placement="bottom" trigger="click" popper-class="avatar-popper">
      <template #reference>
        <el-avatar />
      </template>
      <div class="avatar-popper-container">
        <el-link :underline="false" href="/">个人信息</el-link>
        <el-link :underline="false" href="/">主题设置</el-link>
        <el-divider />
        <el-button @click="Logout" plain bg>注销登录</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const $userStore = useUserStore()
const $router = useRouter()
const Logout = () => {
  $userStore.token = ''
  localStorage.removeItem('TOKEN')
  $router.replace('/login')
}
</script>
