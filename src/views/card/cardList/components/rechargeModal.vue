<template>
  <div class="recharge-box">
    <div class="account-num">当前账号: 12df1a2f121</div>
    <div class="title">充值金额(￥)</div>
    <MyRadio
      :data="rechargeAmountRadio"
      v-model:value="formData.rechargeAmountRadio">
      <input class="duration-input" @input="handleInput" :value="formData.rechargeAmountRadio" />
    </MyRadio>
    <div class="fee-box">
      <div class="title">支付费用</div>
      <div class="fee">
        <span style="font-size: var(--title1); color: var(--money);">$99.00</span>
        <span style="font-size: 14px; color: var(--gray-text)">($99.00*当前汇率=￥682.21)</span>
      </div>
    </div>
    <div class="pay-method">
      <div class="title">支付方式</div>
      <div class="method-box">
        <MyRadio :data="payMethodRadio" v-model:value="formData.payMethod" />
      </div>
    </div>
    <div class="pay-btn">
      <n-button type="primary" style="width: 60%;height: 40px;" @click="handlePay">立即支付</n-button>
    </div>
  </div>
</template>
<script setup>
const formData = ref({
  rechargeAmountRadio: '10',
  payMethod: ''
})

const rechargeAmountRadio = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
]

const payMethodRadio = [
  { label: '普通用户', value: 1, money: '2061.76' },
  // { label: '美金用户', value: 2, money: '0' },
  { label: '快速充值', value: 3 }
]

const handlePay = () => {
  console.log('支付')
  console.log(formData.value)
  console.log('关闭弹窗')
  console.log('支付成功提示')
}

const handleInput = (e) => {
  formData.value.rechargeAmountRadio = !e.target.value ? 10 : e.target.value
}
</script>
<style lang="less" scoped>
.recharge-box {
  .account-num {
    font-size: var(--title2);
    color: var(--gray-text);
    margin-bottom: 40px;
  }

  .title {
    margin-bottom: 10px;
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

  .fee-box {
    margin-top: 40px;
  }

  .pay-method,
  .fee-box {
    margin-bottom: 40px;
    display: flex;
    align-items: center;

    .title {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }

  .pay-method {
    .method-box {
      width: 60%;
    }
  }

  .pay-btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}
</style>