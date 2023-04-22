<template>
  <div class="member-box main-box">
    <UserInfo />
    <Tip />
    <Package />
  </div>
</template>

<script setup lang="jsx">
import Tip from './components/tip.vue'
import UserInfo from './components/userInfo.vue'
import Package from './components/package.vue'
</script>

<style scoped lang="less">
.member-box {
  padding: 48px 0;
}
</style>
