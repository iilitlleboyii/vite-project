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

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
