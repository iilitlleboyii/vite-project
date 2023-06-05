<template>
  <div class="search-bar">
    <el-form>
      <el-row :gutter="20">
        <template
          v-for="item in isCollapse
            ? config.slice(0, visibleInputCount)
            : config"
        >
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-form-item :label="item.label">
              <component
                :is="item.name"
                v-bind="item.bindProps ? item.bindProps : {}"
                v-model="item.value"
                v-on="item.events ? item.events : {}"
              >
                <template v-if="item.slot && item.slot.name === 'el-option'">
                  <el-option
                    v-for="option in item.slot.value"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </template>
              </component>
            </el-form-item>
          </el-col>
        </template>
        <el-col
          :lg="isCollapse ? 6 : 24 - (config.length % 4) * 6"
          :md="isCollapse ? 8 : 24 - (config.length % 3) * 8"
          :sm="isCollapse ? 12 : 24 - (config.length % 2) * 12"
          :xs="24"
        >
          <el-form-item class="search-bar__btns">
            <el-button type="primary" icon="Search">搜索</el-button>
            <el-button icon="Refresh">重置</el-button>
            <el-button
              type="primary"
              size="small"
              link
              @click="isCollapse = !isCollapse"
            >
              <template #default>
                <span>{{ isCollapse ? '展开' : '收起' }}</span>
                <el-icon>
                  <component
                    :is="isCollapse ? 'ArrowDown' : 'ArrowUp'"
                  ></component>
                </el-icon>
              </template>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { debounce } from '@/utils/plugins'

const prop = withDefaults(
  defineProps<{
    config: {
      name: string
      label: string
      value: any
      bindProps?: any
      slot?: {
        name: string
        value: any
      }
      events?: any
    }[]
  }>(),
  {
    config: () => [],
  },
)

const isCollapse = ref(true)

const screenWidth = ref(window.innerWidth)
const visibleInputCount = computed(() => {
  if (screenWidth.value >= 1200) {
    return 3
  } else if (screenWidth.value >= 992) {
    return 2
  } else if (screenWidth.value >= 768) {
    return 1
  } else {
    return 1
  }
})

const handleResize = debounce(() => {
  screenWidth.value = window.innerWidth
}, 300)

onMounted(() => {
  console.log(prop.config)
  window.onresize = () => {
    handleResize()
  }
})
</script>

<style scoped lang="scss">
.search-bar {
  padding-top: 10px;
  background-color: white;
  .search-bar__btns {
    :deep(.el-form-item__content) {
      justify-content: flex-end;
    }
    .el-button + .el-button {
      margin-left: 20px;
    }
  }
}
.el-row {
  margin: 0 !important;
  .el-form-item {
    margin-bottom: 10px !important;
    :deep(.el-form-item__content) div {
      width: 100%;
    }
  }
}
</style>
