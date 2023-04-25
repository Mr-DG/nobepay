<template>
  <div class="options-item-box">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="label">{{ label }}</div>
    <div class="right">
      <Right class="active" />
    </div>
  </div>
</template>

<script setup>
import Right from '@assets/images/icon/right.svg'
const props = defineProps(['label'])
</script>

<style scoped lang="less">
.options-item-box {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #f3f3f5;
  }

  .icon {
    box-sizing: border-box;
    width: 24px;
  }

  .label {
    width: 100px;
    text-align: center;
  }

  .right {
    box-sizing: border-box;
    width: 24px;

  }
}

.options-item-box:hover {
  .active {
    display: block;
  }
}

.active {
  display: none;
}
</style>
