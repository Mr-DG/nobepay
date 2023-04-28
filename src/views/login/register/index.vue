<template>
  <div class="register-box main-box">
    <div class="title">创建一个账号</div>
    <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      type="segment"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
      <n-tab-pane name="signin" tab="电子邮箱" class="tab-pane">
        <n-form :mode="emailFormData">
          <n-form-item label="电子邮箱">
            <n-input
              v-model:value="emailFormData.email"
              placeholder="" />
          </n-form-item>
          <n-form-item label="密码">
            <n-input
              type="password"
              v-model:value="emailFormData.password"
              placeholder=""
              show-password-on="mousedown" />
          </n-form-item>
          <n-form-item label="邀请码(选填)">
            <n-input
              v-model:value="emailFormData.code"
              placeholder="" />
          </n-form-item>
          <n-checkbox
            v-model:checked="checked"
            style="margin-right: 12px; margin-bottom: 20px;">
            我已经阅读并同意BNpay的服务条款和隐私政策。
          </n-checkbox>
        </n-form>
        <n-button
          type="primary"
          style="width: 100%; font-size: var(--title3); padding: 20px 0;">
          创建个人账号
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="手机号码">
        <n-form :model="phoneFormData">
          <n-form-item-row label="手机号码">
            <n-select
              style="width: 35%; margin-right: 10px;"
              v-model:value="phoneType"
              :options="phoneOptions" />
            <n-input
              style="width: 65%;"
              v-model:value="phoneFormData.phoneNum"
              placeholder="" />
          </n-form-item-row>
          <n-form-item label="密码">
            <n-input
              type="password"
              v-model:value="phoneFormData.password"
              placeholder=""
              show-password-on="mousedown" />
          </n-form-item>
          <n-form-item label="邀请码(选填)">
            <n-input
              v-model:value="emailFormData.code"
              placeholder="" />
          </n-form-item>
          <n-checkbox
            v-model:checked="checked"
            style="margin-right: 12px; margin-bottom: 20px;">
            我已经阅读并同意BNpay的服务条款和隐私政策。
          </n-checkbox>
        </n-form>
        <n-button
          type="primary"
          style="width: 100%; font-size: var(--title3); padding: 20px 0;">
          创建个人账号
        </n-button>
      </n-tab-pane>
    </n-tabs>
    <div class="has-account">已有账号？<span @click="router.push('/login')">去登录</span></div>
  </div>
</template>

<script setup>
const router = useRouter()
const checked = ref(false)
const emailFormData = ref({
  email: '',
  password: '',
  code: '',
})
const phoneFormData = ref({
  phoneNum: '',
  password: '',
  code: '',
})
const phoneType = ref('0')
const phoneOptions = [
  { label: '+86(中国)', value: '0' },
  { label: '+86(中国)', value: '1' },
]
</script>

<style scoped lang="less">
.register-box {
  padding-top: 150px;
  display: 'flex';
  width: 350px;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }


  :deep(.n-tabs .n-tabs-rail) {
    background-color: var(--gray-bg);
  }

  :deep(.n-tabs .n-tabs-rail .n-tabs-tab-wrapper .n-tabs-tab.n-tabs-tab--active) {
    background-color: #eaecef;
  }

  .has-account {
    margin-top: 10px;

    span {
      cursor: pointer;
      color: #C99400;
    }
  }

}
</style>
