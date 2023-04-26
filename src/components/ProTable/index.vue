<template>
  <!-- 搜索表单 -->
  <ProForm
    :searchList="props.searchList"
    :formSize="formSize"
    :noSideSpace="noSideSpace"
    @reset="reset"
    @search="search">
  </ProForm>

  <slot name="operation"></slot>

  <!-- 表格主体 -->
  <n-data-table
    v-bind="getProps"
    :loading="loading"
    :data="tableData"
    :pagination="pagination" />
</template>
<script setup>
import { NDataTable } from 'naive-ui'
import { omit } from '@utils'
import { useTable } from './useTable'
import Search from '@/assets/images/icon/search.svg'
import ProForm from '../ProForm/index.vue'

const props = defineProps({
  ...NDataTable.props,
  query: {
    type: Function,
    default: () => null
  },
  rowKey: {
    type: Function,
    default: () => () => 'id'
  },
  searchList: {
    type: Object,
    default: () => null
  },
  formSize: {
    type: String,
    default: () => 'large'
  },
  striped: {
    type: Boolean,
    default: () => true
  },
  size: {
    type: String,
    default: () => 'large'
  }
})

// 获取自带属性
const getProps = computed(() => omit(props, ['query', 'searchList', 'formSize']))

// table
const {
  loading,
  tableData,
  fetchData,
  pagination,
  search,
  reset,
  noSideSpace
} = useTable(props)

// 获取数据
fetchData()

defineExpose({
  fetchData
})

</script>
<style scoped lang="less">
.table-search {
  margin-bottom: 20px;

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .searchBtn,
    .clearBtn {
      width: 100%;
    }

    .clearBtn {
      background-color: var(--gray-bg);
    }

    .searchBtn {
      .search-icon {
        width: 24px;
        margin-right: 6px;
      }
    }
  }
}

.n-data-table :deep(.n-data-table__pagination) {
  justify-content: center;
}
</style>
