<template>
  <n-modal
    v-model:show="showModal"
    class="nmodal"
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
  }
})


const getProps = computed(() => omit(props, ['show']))

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}

defineExpose({
  openModal,
  closeModal
})
</script>
<style>
.n-card>.n-card-header .n-card-header__main {
  font-size: var(--title2);
  font-weight: bold;
}

.nmodal {
  width: 630px;
}
</style>
