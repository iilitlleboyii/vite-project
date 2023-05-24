<template>
  <div>
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

<style scoped></style>
