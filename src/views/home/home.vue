<template>
  <div>
    <search-bar
      v-model:formRef="formRef"
      :config="config"
      :handleSearch="handleSearch"
      :resetForm="resetForm"
    />
    <br />
    <p>{{ t('hello') }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { useI18n } from 'vue-i18n'

// import useMqtt from '@/hooks/useMqtt'
// const { startMqtt, PublicMqtt } = useMqtt()

// startMqtt('production_data2', (topic, message) => {
//   console.log(topic)
//   const msg = JSON.parse(message.toString())
//   console.log(msg)
// })

const { t } = useI18n()

const formInitialData = () => {
  return {
    workOrderNo: '',
    productName: '',
    deviceNo: '',
    companyId: '',
    moduleName: '',
    createTime: '',
  }
}
const formRef = ref(formInitialData())

const selectOptions = [
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
]
const cascaderOptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
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
      value: selectOptions,
    },
    events: {
      change: (val: any) => {
        console.log(val)
      },
    },
  },
  {
    name: 'el-cascader',
    label: '模具名称',
    key: 'moduleName',
    bindProps: {
      options: cascaderOptions,
    },
    events: {
      change: (val: any) => {
        console.log(val)
      },
    },
  },
  {
    name: 'el-date-picker',
    label: '创建时间',
    key: 'createTime',
    bindProps: {
      type: 'datetime',
      placeholder: 'Select date and time',
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
