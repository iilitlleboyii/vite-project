<template>
  <div>
    <!-- 搜索栏 -->
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

const { t } = useI18n()

const formInitialData = () => {
  return {
    workOrderNo: '',
    productName: '',
    deviceNo: '',
    companyId: '',
    moduleName: '',
    createTime: '',
    autocomplete: '',
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

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}
const restaurants = ref(loadAll())
const createFilter = (queryString: string) => {
  return (restaurant: { value: string; link: string }) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}

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
  {
    name: 'el-autocomplete',
    label: '自动补全',
    key: 'autocomplete',
    bindProps: {
      placeholder: '请输入内容',
      fetchSuggestions: querySearch,
    },
    events: {
      select: (val: any) => {
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
