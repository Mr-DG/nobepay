<template>
  <div class="auth-box">
    <n-form ref="formRef" :model="formData">
      <n-form-item path="country" label="国家">
        <n-select
          size="large"
          v-model:value="formData.country"
          placeholder="请选择国家"
          :options="countryOptions"
          clearable />
      </n-form-item>
      <div class="two">
        <n-form-item path="name" label="姓名">
          <n-input placeholder="请输入姓名" v-model:value="formData.name" size="large"></n-input>
        </n-form-item>
        <n-form-item path="age" label="年龄">
          <n-input
            placeholder="请输入年龄"
            type="number"
            size="large">
            <template #suffix>
              周岁
            </template>
          </n-input>
        </n-form-item>
      </div>
      <n-form-item path="idType" label="证件类型">
        <n-select
          v-model:value="formData.idType"
          size="large"
          placeholder="请选择证件类型"
          :options="idTypeOptions" />
      </n-form-item>
      <n-form-item path="idNum" label="证件号码">
        <n-input
          v-model:value="formData.idNum"
          size="large"
          placeholder="请输入证件号码"
          clearable />
      </n-form-item>
      <n-form-item path="code" label="邮箱验证码">
        <n-input
          v-model:value="formData.code"
          placeholder="请输入验证码"
          size="large"
          style="box-sizing: border-box; padding: 4px 0;"
          clearable>
          <template #suffix>
            <div class="code-btn">获取验证码</div>
          </template>
        </n-input>
      </n-form-item>
      <n-button type="primary" class="commit-btn">提交</n-button>
    </n-form>
  </div>
</template>

<script setup>
const formData = ref({
  country: null,
  name: '',
  age: '',
  idType: null,
  idNum: '',
  code: ''
})

const countryOptions = [
  { label: '中国', value: '0' },
  { label: '美国', value: '1' },
  { label: '日本', value: '2' },
]

const idTypeOptions = [
  { label: '护照', value: '0' },
  { label: '身份证', value: '1' },
]
</script>

<style scoped lang="less">
.auth-box {
  .two {
    display: flex;
    gap: 20px;
  }

  .code-btn {
    background-color: #eaecef;
    box-sizing: border-box;
    border: 0;
    padding: 0 10px;
    height: 80%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  .commit-btn {
    width: 100%;
    padding: 22px 0;
  }
}
</style>
