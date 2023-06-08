<template>
  <div>
    <el-dropdown trigger="click" @command="handleCommand">
      <div class="avatar-dropdown-container">
        <el-avatar :src="avatarSrc" @error="errorHandler">
          <el-icon><User /></el-icon>
        </el-avatar>
        <el-icon><CaretBottom /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <template v-for="(item, index) in dropdownItems">
            <el-dropdown-item
              :command="item.command"
              :divided="index === dropdownItems.length - 1"
            >
              {{ item.text }}
            </el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <el-dialog v-model="open" title="注销提醒" width="20%">
    <span>是否确认注销登录？记得先保存好重要的数据哦！</span>
    <template #footer>
      <span>
        <el-button @click="open = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
// @ts-ignore
import { ElMessage } from 'element-plus'
import avatarSrc from '@/assets/images/avatar.jpg'
import { User } from '@element-plus/icons-vue'

const open = ref(false)
const $userStore = useUserStore()
const $router = useRouter()
const logout = () => {
  $userStore.token = ''
  localStorage.removeItem('TOKEN')
  $router.replace('/login')
  ElMessage.success('注销成功')
}
const dropdownItems = ref([
  {
    command: 'PersonalInfo',
    text: '个人信息',
  },
  {
    command: 'ThemeSettings',
    text: '主题设置',
  },
  {
    command: 'LogOut',
    text: '注销登录',
  },
])
const handleCommand = (command: string) => {
  switch (command) {
    case 'PersonalInfo':
      ElMessage(`Click on item ${command}`)
      break
    case 'ThemeSettings':
      ElMessage(`Click on item ${command}`)
      break
    case 'LogOut':
      open.value = true
      break
  }
}
const errorHandler = () => ElMessage.error('头像数据加载失败')
const handleConfirm = () => {
  logout()
  open.value = false
}
</script>

<style scoped lang="scss">
.avatar-dropdown-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 7px;
  }
}
</style>
