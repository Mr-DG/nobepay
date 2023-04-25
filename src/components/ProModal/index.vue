<template>
  <n-modal
    v-model:show="showModal"
    v-bind="getProps"
    :bordered="false"
    role="dialog"
    aria-modal="true">
    <slot></slot>
  </n-modal>
</template>

<script setup>
import { NModal } from 'naive-ui'
import { omit } from '@utils/index.js'

const props = defineProps({
  ...NModal.props,
  title: {
    type: String,
    default: () => '默认标题'
  },
  preset: {
    type: String,
    default: () => 'card'
  },
  style: {
    type: String,
    default: () => 'width: 630px;'
  }
})


const getProps = computed(() => omit(props, ['show']))

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

defineExpose({
  openModal
})
</script>
<style>
.n-card>.n-card-header .n-card-header__main {
  font-size: var(--title2);
  font-weight: bold;
}
</style>
