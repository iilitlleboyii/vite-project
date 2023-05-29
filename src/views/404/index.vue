<template>
  <div>
    <h1>404路由</h1>
    <h1>SVG全局挂载使用</h1>
    <SvgIcon iconName="phone" color="green"></SvgIcon>
    <SvgIcon iconName="phone" color="red" fontSize="50px"></SvgIcon>
    <div style="width: 800px; height: 400px">
      <Echarts :options="options"></Echarts>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const options = reactive({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
})
</script>

<style scoped lang="scss"></style>
