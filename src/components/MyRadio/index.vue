<!-- 使用案例 -->
<!-- <MyRadio :data="data" v-model:value="value" /> -->
<template>
  <div class="radio-box">
    <div
      v-for="item in props.data" :key="item.value"
      class="radio-item"
      :class="{ 'radio-active': item.value == value }"
      @click="handleClick(item.value)">
      {{ item.label }}
      <div v-if="item.money" style="color: var(--money); font-size: 12px;">
        余额: {{ `${item.value == 1 ? '￥' : '$'}${item.money}` }}
      </div>
    </div>
    <div class="radio-slot" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data', 'value'])
const emit = defineEmits(['update:value'])

const active = ref()
const handleClick = (key) => {
  active.value = key
  emit('update:value', key)
}
</script>

<style scoped lang="less">
.radio-box {
  display: flex;
  gap: 20px;

  .radio-item {
    flex: 1;
    background-color: var(--gray-bg);
    padding: 5px 0;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
      border: 1px solid var(--primary);
    }
  }

  .radio-slot {
    flex: 1;
  }

  .radio-active {
    border: 1px solid var(--primary);
    position: relative;

    &::before {
      --h: 8px;
      --w: 10px;
      content: '';
      display: block;
      border-left: var(--w) solid transparent;
      border-right: var(--w) solid var(--primary);
      border-bottom: var(--h) solid transparent;
      border-top: var(--h) solid var(--primary);
      position: absolute;
      top: 0;
      right: 0;
    }

    &::after {
      content: '√';
      display: block;
      color: #fff;
      position: absolute;
      top: -5px;
      right: 0;
    }
  }
}
</style>
