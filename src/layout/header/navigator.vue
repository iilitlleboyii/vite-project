<template>
  <div class="nav">
    <el-input v-model="inputValue" placeholder="Please input">
      <template #prepend>
        <el-button icon="Search" />
      </template>
    </el-input>
    <icon-btn
      :title="fullScreen ? '还原' : '全屏'"
      v-model:switch-value="fullScreen"
      on-name="Crop"
      off-name="FullScreen"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconBtn from './icon-btn.vue'
const inputValue = ref('')
const fullScreen = ref(false)
</script>

<style scoped lang="scss">
.nav {
  position: absolute;
  right: 20px;
  display: flex;
  div {
    margin-left: 10px;
  }
}
</style>
