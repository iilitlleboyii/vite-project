<template>
  <div>
    <search-bar :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formValue = reactive({
  workOrderNo: '1',
  productName: '2',
  deviceNo: '3',
  companyId: '',
})

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const config = ref([
  {
    name: 'el-input',
    label: '工单编号',
    bindProps: {
      placeholder: '请输入工单编号',
    },
    value: formValue.workOrderNo,
  },
  {
    name: 'el-input',
    label: '产品名称',
    bindProps: {
      placeholder: '请输入产品名称',
    },
    value: formValue.productName,
  },
  {
    name: 'el-input',
    label: '设备编号',
    bindProps: {
      placeholder: '请输入设备编号',
    },
    value: formValue.deviceNo,
  },
  {
    name: 'el-select',
    label: '公司名称',
    value: formValue.companyId,
    slot: {
      name: 'el-option',
      value: options,
    },
    events: {
      change: (val: any) => {
        console.log(val)
      },
    },
  },
])
</script>

<style scoped lang="scss"></style>
