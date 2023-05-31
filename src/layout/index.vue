<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth">
        <!-- 显示Logo和标题 -->
        <logo-title
          :is-collapse="isCollapse"
          :title="defaultSettings.title"
          :icon-name="defaultSettings.logo"
        />
        <el-scrollbar class="menu-scrollbar">
          <!-- 菜单栏 -->
          <el-menu
            :collapse="isCollapse"
            :collapse-transition="false"
            :default-active="$route.path"
            unique-opened
          >
            <menu-item
              v-for="item in menuItems"
              :key="item.path"
              :item="item"
            />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- 导航栏 -->
        <el-header>
          <div>
            <icon-switch
              :title="isCollapse ? '展开' : '折叠'"
              v-model:switch-value="isCollapse"
              on-icon="Expand"
              off-icon="Fold"
            />
            <el-divider direction="vertical" />
            <bread-crumb />
          </div>
          <navigator />
        </el-header>
        <!-- 内容区 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types'
import { ref, computed, watch } from 'vue'
import { useMenuStore } from '@/stores'
import { useRoute } from 'vue-router'
import MenuItem from './aside/menu-item.vue'
import LogoTitle from './aside/logo-title.vue'
import BreadCrumb from './header/bread-crumb.vue'
import Navigator from './header/navigator.vue'
import defaultSettings from '@/settings'
import IconSwitch from './header/icon-switch.vue'

const isCollapse = ref(false)
const asideWidth = ref('200px')

watch(
  isCollapse,
  () => {
    asideWidth.value = isCollapse.value ? '64px' : '200px'
  },
  {
    immediate: true,
  },
)

const $route = useRoute()

const $menuStore = useMenuStore()
const menuList = $menuStore.menuList
const filterHidden = (arr: MenuItemType[]) => {
  const stack = [...arr]
  while (stack.length) {
    const item = stack.pop()
    if (item) {
      if (item.hidden) {
        if (item.children?.length) {
          item.children = item.children.filter(
            (child: MenuItemType) => !child.hidden,
          )
        }
      } else if (item.children?.length) {
        item.children.forEach((child: MenuItemType) => stack.push(child))
      }
    }
  }
  return arr.filter((item: MenuItemType) => !item.hidden)
}
const menuItems = computed(() => filterHidden(menuList))
</script>

<style scoped lang="scss">
.common-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eff6fc;
  .menu-scrollbar {
    height: calc(100vh - 120px);
  }
}
</style>
