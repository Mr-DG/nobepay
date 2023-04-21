<template>
  <n-modal v-model:show="showModal"
    style="width: 600px"
    title="卡片预设"
    class="custom-card"
    preset="card"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true">
    内容
    <template #footer>
      尾部
    </template>
  </n-modal>
</template>

<script setup>
const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

defineExpose({
  openModal
})
</script>