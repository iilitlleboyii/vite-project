<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth">
        <div class="logo_title" title="回到首页">
          <SvgIcon iconName="home" fontSize="28px" />
          <span v-show="!isCollapse">后台管理系统</span>
        </div>
        <el-scrollbar style="height: calc(100vh - 120px)">
          <el-menu
            :collapse="isCollapse"
            :collapse-transition="false"
            unique-opened
          >
            <MenuItem :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <div
            :title="isCollapse ? '展开' : '折叠'"
            @click="changeIsCollapse"
            style="cursor: pointer"
          >
            <el-icon style="font-size: 28px">
              <Expand v-if="isCollapse" />
              <Fold v-else />
            </el-icon>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './menuItem.vue'
import { ref } from 'vue'
import { useMenuStore } from '@/stores'

const isCollapse = ref(false)
const asideWidth = ref('200px')
const changeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
  asideWidth.value = isCollapse.value ? '64px' : '200px'
}

const $menuStore = useMenuStore()
const menuList = $menuStore.menuList
</script>

<style scoped lang="scss">
.common-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $light-main-background-color;
  .logo_title {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
}
</style>
