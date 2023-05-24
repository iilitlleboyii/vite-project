<template>
  <div class="chart-container" :id="chartId"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { ComposeOption } from 'echarts/core'

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components'
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components'

import { LineChart } from 'echarts/charts'
import type { LineSeriesOption } from 'echarts/charts'

import { ref, onMounted } from 'vue'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LineSeriesOption
>

const baseComponents = [
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]
const chartComponents = [LineChart]
const allComponents = baseComponents.concat(chartComponents)
// 注册基础组件和图表组件
echarts.use(allComponents)

const props = defineProps<{
  options: ECOption
}>()

const chartId = ref('')

const uid = () => {
  const temp_url = URL.createObjectURL(new Blob())
  const uuid = temp_url.toString()
  URL.revokeObjectURL(temp_url)
  return uuid.substring(uuid.lastIndexOf('/') + 1)
}
chartId.value = uid()

let myChart: any

const chartInit = () => {
  const chartDom = document.getElementById(chartId.value)!
  myChart = echarts.init(chartDom)
  props.options && myChart.setOption(props.options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

onMounted(() => {
  chartInit()
})
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
