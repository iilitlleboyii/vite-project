<template>
  <div>
    <h1>SVG全局挂载使用</h1>
    <SvgIcon
      iconName="phone"
      color="green"
      width="100px"
      height="100px"
    ></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'
// @ts-ignore
import { ElMessage } from 'element-plus'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' }).then((res) => {
    console.log(res)
    if (res.code === 200) {
      ElMessage.success('登录成功')
    } else {
      ElMessage.error('登录失败')
    }
  })
})
</script>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
