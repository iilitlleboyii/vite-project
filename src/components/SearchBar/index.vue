<template>
  <div class="search-bar" :style="{ height: searchBarHeight }">
    <el-form>
      <el-row :gutter="20">
        <template
          v-for="input in isCollapse
            ? inputArr.slice(0, visibleInputCount)
            : inputArr"
        >
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-form-item :label="input.label">
              <el-input
                v-model="formInline.user"
                :placeholder="input.placeholder"
              />
            </el-form-item>
          </el-col>
        </template>
        <el-col
          :lg="isCollapse ? 6 : 24 - (inputArr.length % 4) * 6"
          :md="isCollapse ? 8 : 24 - (inputArr.length % 3) * 8"
          :sm="isCollapse ? 12 : 24 - (inputArr.length % 2) * 12"
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
import { reactive, ref, computed, onMounted } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const isCollapse = ref(true)
const searchBarHeight = computed(() => {
  return isCollapse.value ? '52px' : 'auto'
})

const inputArr = ref([
  {
    label: '工单编号',
    placeholder: '请输入工单编号',
    model: 'user',
  },
  {
    label: '产品名称',
    placeholder: '请输入产品名称',
    model: 'user',
  },
  {
    label: '设备名称',
    placeholder: '请输入设备名称',
    model: 'user',
  },
  {
    label: '模具名称',
    placeholder: '请输入模具名称',
    model: 'user',
  },
  {
    label: '工单状态',
    placeholder: '请输入工单状态',
    model: 'user',
  },
  {
    label: '工单创建时间',
    placeholder: '请输入工单创建时间',
    model: 'user',
  },
])

const screenWidth = ref(window.innerWidth)
const visibleInputCount = computed(() => {
  if (screenWidth.value >= 1200) {
    return 3
  } else if (screenWidth.value >= 992) {
    return 2
  } else if (screenWidth.value >= 768) {
    return 1
  }
})
onMounted(() => {
  window.onresize = () => {
    screenWidth.value = window.innerWidth
  }
})
</script>

<style scoped lang="scss">
.search-bar {
  padding-top: 10px;
  background-color: white;
  .el-row {
    margin: 0 !important;
    .el-form-item {
      margin-bottom: 10px !important;
    }
  }
  .search-bar__btns {
    :deep(.el-form-item__content) {
      justify-content: flex-end;
    }
  }
}
</style>
