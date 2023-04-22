<template>
  <div class="user-info">
    <div class="user-avatar">
      <img src="@/assets/images/userAvatar.jpg" alt="">
    </div>
    <div class="user-right">
      <div class="grade">当前等级: {{ user.level }}</div>
      <div class="user-id">用户ID: {{ user.id }}</div>
    </div>
  </div>
</template>

<script setup>
const user = reactive({
  level: '个人用户',
  id: '1df45w1f5we41fw5'
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  margin-bottom: 40px;

  .user-avatar {
    width: 48px;

    img {
      width: 100%;
    }
  }

  .user-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 18px;

    .grade {
      font-size: var(--title1);
      font-weight: bold;
    }

    .user-id {
      color: var(--gray-text);
    }
  }

}
</style>
