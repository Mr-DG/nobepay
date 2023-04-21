<template>
  <ProTable
    :columns="columns"
    :pagination="true"
    :bordered="false"
    :query="api.query"
    :searchList="searchList">
    <template #operation>
      <n-button type="warning" @click="add">添加</n-button>
    </template>
  </ProTable>
  <ProModal ref="proModalRef" />
</template>

<script setup>
import ProTable from '@components/ProTable/index.vue'
import ProModal from '@components/ProModal/index.vue'
import { columns } from './columns'
import { useSearch } from './useSearch'

const { searchList } = useSearch()

const proModalRef = ref()

const add = () => {
  proModalRef.value.openModal()
}

const getData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        code: 200,
        data: [
          { name: 'wzd', role: ['0', '1'] },
          { name: 'wzd1', role: ['0', '1'] },
          { name: 'wzd2', role: ['0', '1'] }
        ],
        msg: '操作成功'
      })
    }, 500)
  })
}

const api = {
  query: getData
}

</script>

<style scoped lang="less"></style>
