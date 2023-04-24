<template>
  <div class="recharge-box">
    <div class="account-num">当前账号: 12df1a2f121</div>
    <!-- <MyRadio
      :data="monthRadio"
      v-model:value="formData.duration">
      <input class="duration-input" @input="handleInput" :value="formData.duration" />
    </MyRadio> -->
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
        <!-- <MyRadio :data="payMethodRadio" v-model:value="formData.payMethod" /> -->
      </div>
    </div>
    <div class="pay-btn">
      <n-button type="primary" style="width: 60%;height: 40px;" @click="handlePay">立即支付</n-button>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
.fee-box {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .title {
    margin-right: 30px;
  }
}
</style>