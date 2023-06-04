<template>
  <div class="search-bar">
    <el-form>
      <el-row :gutter="15">
        <el-col :span="5">
          <el-form-item label="字段1">
            <el-input v-model="formInline.user" placeholder="请输入字段1" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="字段2">
            <el-input v-model="formInline.user" placeholder="请输入字段2" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="字段3">
            <el-input v-model="formInline.user" placeholder="请输入字段3" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="字段4">
            <el-input v-model="formInline.user" placeholder="请输入字段4" />
          </el-form-item>
        </el-col>

        <el-col :span="4">
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
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const isCollapse = ref(true)
</script>

<style scoped lang="scss">
.search-bar {
  height: 50px;
  padding: 10px;
  background-color: white;
  .el-form {
    .el-form-item {
      margin: 0;
    }
  }
  .el-button + .el-button {
    margin-left: 10px;
  }
}
</style>
