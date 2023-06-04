<template>
  <div class="search-bar" :style="{ height: searchBarHeight }">
    <!-- <el-form>
      <el-row justify="space-between">
        <el-col :span="4">
          <el-form-item label="字段1">
            <el-input v-model="formInline.user" placeholder="请输入字段1" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字段2">
            <el-input v-model="formInline.user" placeholder="请输入字段2" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字段3">
            <el-input v-model="formInline.user" placeholder="请输入字段3" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字段4">
            <el-input v-model="formInline.user" placeholder="请输入字段4" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" icon="Search">搜索</el-button>
            <el-button icon="Refresh">重置</el-button>
            <el-button
              type="primary"
              link
              size="small"
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
    </el-form> -->
    <el-form :inline="true" :model="formInline">
      <el-form-item label="Approved by">
        <el-input v-model="formInline.user" placeholder="Approved by" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item style="position: absolute; right: 0; margin-right: 0">
        <el-button type="primary">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const isCollapse = ref(true)
const searchBarHeight = computed(() => {
  return isCollapse.value ? '52px' : 'auto'
})
</script>

<style scoped lang="scss">
.search-bar {
  padding: 10px;
  background-color: white;
  .el-form {
    position: relative;
  }
  // overflow: hidden;
  // .el-form {
  //   .el-form-item {
  //     margin: 0;
  //   }
  // }
  // .el-button + .el-button {
  //   margin-left: 7px;
  // }
}
</style>
