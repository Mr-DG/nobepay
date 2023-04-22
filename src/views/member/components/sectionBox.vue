<template>
  <div class="section-box">
    <div class="section-title">{{ title }}</div>
    <div class="section-content">
      <div class="left">
        <div class="item" v-for="item in props.data" :key="item">
          {{ item.label }}
        </div>
      </div>
      <div class="right">
        <div class="item" v-for="item in props.data" :key="item">
          <span>{{ item.value }}</span>
          <template v-if="unit">/张</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data', 'title', 'unit'])
</script>

<style scoped lang="less">
.section-box {
  color: var(--gray-text);

  .section-title {
    font-size: var(--title2);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    margin-bottom: 20px;

    &::before,
    &::after {
      content: "";
      display: block;
      flex: 1;
      height: 1px;
      background-color: var(--gray-text);
      transform: scaleY(1.5);
    }
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    font-size: var(--content);

    .left,
    .right {
      .item {
        margin-bottom: 20px;
      }
    }

    .right {
      .item {
        text-align: right;

        span {
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
