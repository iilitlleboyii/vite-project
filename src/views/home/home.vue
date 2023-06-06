<template>
  <div>
    <search-bar
      v-model:formRef="formRef"
      :config="config"
      :handleSearch="handleSearch"
      :resetForm="resetForm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formInitialData = () => {
  return {
    workOrderNo: '',
    productName: '',
    deviceNo: '',
    companyId: '',
  }
}
const formRef = ref(formInitialData())

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
    key: 'workOrderNo',
    bindProps: {
      placeholder: '请输入工单编号',
    },
  },
  {
    name: 'el-input',
    label: '产品名称',
    key: 'productName',
    bindProps: {
      placeholder: '请输入产品名称',
    },
  },
  {
    name: 'el-input',
    label: '设备编号',
    key: 'deviceNo',
    bindProps: {
      placeholder: '请输入设备编号',
    },
  },
  {
    name: 'el-select',
    label: '公司名称',
    key: 'companyId',
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

const handleSearch = () => {
  // 添加搜索的业务代码
  console.log(formRef.value)
}
const resetForm = () => {
  formRef.value = formInitialData()
  handleSearch()
}
</script>

<style scoped lang="scss"></style>
