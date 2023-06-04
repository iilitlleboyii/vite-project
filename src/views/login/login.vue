<template>
  <div class="login-container">
    <div class="login-box">
      <el-row>
        <el-col :span="24">
          <h1>欢&nbsp;迎&nbsp;使&nbsp;用</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form
            ref="formRef"
            class="login-form"
            :model="formParams"
            :rules="formRules"
            @submit.prevent
          >
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="formParams.username"
                placeholder="请输入您的账号"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                show-password
                v-model="formParams.password"
                placeholder="请输入您的密码"
                @keyup.enter="submitForm(formRef)"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                class="login-btn"
                type="primary"
                @click="submitForm(formRef)"
                :loading="isLoading"
              >
                {{ isLoading ? '登 录 中 ...' : '登  录' }}
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-col :span="18">
                <el-checkbox
                  v-model="rememberMe"
                  label="记住密码"
                  size="large"
                />
              </el-col>
              <el-col :span="6">
                <el-button class="register-btn" type="primary" link>
                  注册账号
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref, watch } from 'vue'
// @ts-ignore
import type { FormRules, FormInstance } from 'element-plus'
// @ts-expect-error 等待作者更新或者自己写个d.ts声明
import { ElMessage, ElNotification } from 'element-plus'
import { useUserStore } from '@/stores'
import { useRouter, useRoute } from 'vue-router'

const rememberMe = ref<boolean>()
let rememberMeStorage = localStorage.getItem('rememberMe')
rememberMe.value = rememberMeStorage ? JSON.parse(rememberMeStorage) : false

const isLoading = ref(false)

const $userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

const formRef = ref<FormInstance>()
const formRules = reactive<FormRules>({
  username: [{ required: true, message: '账号必填哦', trigger: 'blur' }],
  password: [{ required: true, message: '密码必填哦', trigger: 'blur' }],
})
const formParams = reactive({
  username: '',
  password: '',
})
let formParamsStorage = localStorage.getItem('formParams')
if (formParamsStorage) {
  let formParamsStorageObj = JSON.parse(formParamsStorage)
  formParams.username = formParamsStorageObj.username
  formParams.password = formParamsStorageObj.password
}

watch(
  rememberMe,
  (newValue) => {
    localStorage.setItem('rememberMe', String(newValue))
  },
  { immediate: true },
)

const login = async () => {
  try {
    await $userStore.userLogin(formParams)
    const redirect = ($route.query.redirect as string) || '/'
    $router.replace(redirect)
    ElNotification({
      title: '登录成功',
      message: '欢迎回来，我的老哥！',
      type: 'success',
    })
  } catch (error: any) {
    ElMessage.error(error)
  }
}

/**
 * 验证表单并提交
 * @author Yuxianhao <yu.xh00@foxmail.com>
 * @date 2023-05-28
 * @param {any} formEl:FormInstance|undefined
 * @todo 待添加验证码和用户信息加密
 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: boolean) => {
    if (valid) {
      if (rememberMe.value) {
        localStorage.setItem('formParams', JSON.stringify(formParams))
      } else {
        localStorage.removeItem('formParams')
      }
      isLoading.value = true
      setTimeout(() => {
        login()
        isLoading.value = false
      }, 600)
    }
  })
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login/login_background.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .login-box {
    width: 270px;
    height: 250px;
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(15px);

    h1 {
      text-align: center;
      font-size: 20px;
      color: white;
    }
  }
}

.login-form {
  :deep(.el-form-item__label) {
    font-size: 18px;
    color: white;
  }
  .login-btn {
    width: 100%;
    font-size: 16px;
    color: white;
  }
  .el-checkbox:not(.is-checked) :deep(.el-checkbox__label) {
    color: white;
  }
}
</style>
