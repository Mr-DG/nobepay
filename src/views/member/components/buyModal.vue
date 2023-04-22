<template>
  <!-- 购买弹窗 -->
  <ProModal ref="proModalRef" title="购买">
    <div>
      <div class="duration">
        <div class="title">续费时长(月)</div>
        <MyRadio
          :data="monthRadio"
          v-model:value="formData.duration">
          <input class="duration-input" @input="handleInput" :value="formData.duration" />
        </MyRadio>
      </div>
      <div class="packageRadio">
        <div class="title">选择方案</div>
        <div class="radio-box">
          <MyRadio :data="packageRadio" v-model:value="formData.package" />
        </div>
      </div>
      <div class="fee-box">
        <div class="title">支付费用</div>
        <div class="fee">
          <span style="font-size: var(--title1); color: var(--money);">$99.00</span>
          <span style="font-size: 14px; color: var(--gray-text)">($99.00*当前汇率=￥682.21)</span>
        </div>
      </div>
      <div class="pay-method">
        <div class="title">支付费用</div>
        <div class="method-box">
          <MyRadio :data="payMethodRadio" v-model:value="formData.payMethod" />
        </div>
      </div>
      <div class="pay-btn">
        <n-button type="primary" style="width: 60%;height: 40px;" @click="handlePay">立即支付</n-button>
      </div>
    </div>
  </ProModal>
</template>

<script setup>
import ProModal from '@components/ProModal/index.vue'
import MyRadio from '@components/MyRadio/index.vue'

const props = defineProps(['type'])

const proModalRef = ref()

const formData = ref({
  duration: 1,
  package: null,
  payMethod: 1
})
watchEffect(() => {
  formData.value.package = props.type
})

const handlePay = () => {
  console.log('支付')
  console.log(formData.value)
  console.log('关闭弹窗')
  console.log('支付成功提示')
}

const handleInput = (e) => {
  console.log(e.target.value)
  formData.value.duration = !e.target.value ? 1 : e.target.value
}

const monthRadio = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '6', value: 6 },
  { label: '12', value: 12 }
]
const packageRadio = [
  { label: '会员用户: $99', value: 1 },
  { label: '专业用户: $998', value: 2 }
]
const payMethodRadio = [
  { label: '普通用户', value: 1, money: '2061.76' },
  { label: '美金用户', value: 2, money: '0' },
  { label: '快速充值', value: 3 }
]
defineExpose({
  proModalRef
})
</script>

<style scoped lang="less">
.duration,
.packageRadio {
  margin-bottom: 40px;

  .title {
    margin-bottom: 10px;
  }
}

.packageRadio {
  .radio-box {
    width: 80%;
  }
}

.fee-box,
.pay-method {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .title {
    margin-right: 30px;
  }
}

.pay-method {
  .method-box {
    flex: 1;
  }
}

.pay-btn {
  display: flex;
  justify-content: center;
}

.duration-input {
  box-sizing: border-box;
  width: 100%;
  padding: 7px;
  border: 1px solid var(--primary);

  &:focus-visible {
    outline: 0;
    border: 1px solid var(--primary);
  }
}
</style>
