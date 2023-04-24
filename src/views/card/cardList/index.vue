<template>
  <div class="card-list-box main-box">
    <ProTable
      :columns="columns"
      :pagination="true"
      :bordered="false"
      :query="api.query"
      :searchList="searchList">
    </ProTable>
  </div>
  <!-- 充值modal -->
  <ProModal ref="rechargeModalRef" title="卡片充值">
    <RechargeModal />
  </ProModal>
</template>

<script setup>
import ProTable from '@components/ProTable/index.vue'
import ProModal from '@components/ProModal/index.vue'
import RechargeModal from './components/rechargeModal.vue'
import { useColumns } from './columns'
import { useSearch } from './useSearch'

const { searchList } = useSearch()

const rechargeModalRef = ref()
const openModal = (key) => {
  key == 2 && rechargeModalRef.value.openModal()
}

const { columns } = useColumns({ openModal })

const getData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      const arr = new Array(12).fill({
        num: 'C2895BE36',
        paragraph: '531993',
        cardOwner: '钱泽西',
        surplus: '$3159',
        accumulate: '$590',
        status: '已激活',
        cardAfterNum: '5849',
        label: '亚马逊消费',
        createdTime: '2023/04/16 20:28:16'
      })
      res({
        code: 200,
        data: arr,
        msg: '操作成功'
      })
    }, 500)
  })
}

const api = {
  query: getData
}

</script>

<style scoped lang="less">
.card-list-box {
  padding: 40px 0;
}
</style>
