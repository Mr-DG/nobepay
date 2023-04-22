<template>
  <div class="tip">
    <div class="title">须知:</div>
    <div class="content">1.开通/升级费率方案一旦生效不予以退款，有效期之前不可降级，开通即表示同意；</div>
    <div class="content">2.购买相同费率方案，费率方案级别不会增加，有效期叠加；</div>
    <div class="content">3.企业用户和合伙人计划务必联系客服，协助开通；</div>
    <div class="content">4.如需升级费率方案，请在下面列表中点击相应的【立即开通】按钮；</div>
    <div class="content">5.费率方案可依次升级，老方案费用将会按照剩余有效期进行折算！</div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.tip {
  background-color: #FAFAFA;
  padding: 40px;
  margin-bottom: 40px;

  .title {
    font-size: var(--title2);
    font-weight: bold;
    margin-bottom: 20px;
  }

  .content {
    font-size: var(--content);
    color: var(--gray-text);
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
