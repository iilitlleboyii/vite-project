<template>
  <div class="login-container">
    <div class="login-box">
      <el-row>
        <el-col :span="24">
          <h1>欢迎登录</h1>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="20">
          <el-form class="login-form" label-width="50px" label-position="left">
            <el-form-item label="账号">
              <el-input />
            </el-form-item>
            <el-form-item label="密码">
              <el-input />
            </el-form-item>
            <el-form-item>
              <el-button>登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
    width: 400px;
    height: 300px;
    padding: 15px;
    border-radius: 30px;
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
    color: red;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-button {
    width: 100%;
  }
}
</style>
