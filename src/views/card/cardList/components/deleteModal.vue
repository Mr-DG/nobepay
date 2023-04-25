<template>
  <div class="delete-card-box">
    <div class="title">退款金额(￥)</div>
    <div class="fee">204.24</div>
    <n-button type="primary" class="delete-btn" @click="handleDelete">确认删除</n-button>
  </div>
</template>
<script setup>
const emit = defineEmits(['onCloseModel'])

const handleDelete = () => {
  console.log('1')
  emit('onCloseModel', 1)
}
</script>
<style lang="less" scoped>
.delete-card-box {
  .title {
    font-size: var(--title2);
    margin-bottom: 10px;
  }

  .fee {
    border: 1px solid var(--primary);
    border-radius: 3px;
    padding: 5px 0;
    font-size: var(--title2);
    text-align: center;
    margin-bottom: 20px;
  }

  .delete-btn {
    width: 100%;
    font-size: var(--content);
    padding: 24px 0;
  }
}
</style>