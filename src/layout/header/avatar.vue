<template>
  <div>
    <el-popover placement="bottom" trigger="hover" popper-class="avatar-popper">
      <template #reference>
        <el-avatar />
      </template>
      <div class="avatar-popper-container">
        <el-link :underline="false" href="/">个人信息</el-link>
        <el-link :underline="false" href="/">主题设置</el-link>
        <el-divider />
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          icon="InfoFilled"
          icon-color="#626AEF"
          title="是否确定注销？"
          @confirm="Logout"
        >
          <template #reference>
            <el-button plain bg>注销登录</el-button>
          </template>
        </el-popconfirm>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
// @ts-ignore
import { ElMessage } from 'element-plus'

const $userStore = useUserStore()
const $router = useRouter()
const Logout = () => {
  $userStore.token = ''
  localStorage.removeItem('TOKEN')
  $router.replace('/login')
  ElMessage('注销成功')
}
</script>
