<template>
  <div>
    <h1>SVG全局挂载使用</h1>
    <SvgIcon
      iconName="phone"
      color="green"
      width="100px"
      height="100px"
    ></SvgIcon>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'
// @ts-expect-error 等待作者更新或者自己写个d.ts声明
import { ElMessage } from 'element-plus'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' }).then((res: any) => {
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

<style>
#waifu {
  left: unset;
  right: 20px;
}
</style>
