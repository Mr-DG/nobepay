<template>
  <div class="login-box main-box">
    <div class="title">BNpay登录</div>
    <n-form
      class="login-form"
      ref="formRef"
      :label-width="80"
      :model="formData">
      <n-form-item label="请输入您的邮箱/手机号码" path="account">
        <n-input v-model:value="formData.account" placeholder="" />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="formData.password" placeholder="" />
      </n-form-item>
      <n-form-item>
        <n-button
          @click="handleValidateClick"
          class="login-btn"
          type="primary">
          登录
        </n-button>
      </n-form-item>
    </n-form>
    <div class="register" @click="router.push('/register')">
      创建一个BNpay账号
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const formData = ref({
  account: '',
  password: ''
})

const formRef = ref()
const handleValidateClick = (e) => {
  e.preventDefault()
  const messageReactive = message.loading('Verifying', {
    duration: 0
  })
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      message.error('Invalid')
      console.log('errors', errors)
    }
    messageReactive.destroy()
  })
}
</script>

<style scoped lang="less">
.login-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 150px;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .login-form {
    width: 300px;

    .login-btn {
      width: 100%;
    }
  }

  .register {
    cursor: pointer;
    font-size: var(--content);
    color: var(--money);
  }
}
</style>
