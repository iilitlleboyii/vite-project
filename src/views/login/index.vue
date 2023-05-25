<template>
  <div class="login-container">
    <div class="login-box">
      <el-row>
        <el-col :span="24">
          <h1>欢&nbsp;迎&nbsp;登&nbsp;录</h1>
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
                登&nbsp;&nbsp;录
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
              <el-col :span="6" style="display: flex; justify-content: right">
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
import { reactive, ref } from 'vue'
// @ts-ignore
import type { FormRules, FormInstance } from 'element-plus'
import { reqLogin } from '@/api/user'
// @ts-expect-error 等待作者更新或者自己写个d.ts声明
import { ElMessage } from 'element-plus'
import $router from '@/router'

const formRef = ref<FormInstance>()
const formParams = reactive({
  username: '',
  password: '',
})
const formRules = reactive<FormRules>({
  username: [{ required: true, message: '账号必填哦', trigger: 'blur' }],
  password: [{ required: true, message: '密码必填哦', trigger: 'blur' }],
})
const rememberMe = ref(false)
const isLoading = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: boolean) => {
    if (valid) {
      isLoading.value = true
      reqLogin(formParams).then((res: any) => {
        isLoading.value = false
        if (res.code === 200) {
          ElMessage.success('登录成功')
          setTimeout(() => {
            $router.replace('/')
          }, 1500)
        } else {
          ElMessage.error('登录失败')
        }
      })
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
  justify-content: center;
  align-items: center;

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
