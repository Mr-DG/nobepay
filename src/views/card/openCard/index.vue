<template>
  <div class="open-card-box main-box">
    <div class="area">
      <div class="title">选择区域</div>
      <MyRadio
        :data="data"
        v-model:value="formData.area"
        itemWidth="200px" />
    </div>

  </div>
</template>

<script setup>

const formData = ref({
  area: ''
})

const data = [
  { label: '中国大陆', value: 0 },
  { label: '美元区', value: 1 },
  { label: '港币区', value: 2 },
  { label: '欧元区', value: 3 },
  { label: '迪拉姆区', value: 4 },
  { label: '加币区', value: 5 },
  { label: '日元区', value: 6 },
  { label: '英镑区', value: 7 },
]
</script>

<style scoped lang="less">
.open-card-box {
  .area {
    width: 40%;

    .title {}

  }
}
</style>
