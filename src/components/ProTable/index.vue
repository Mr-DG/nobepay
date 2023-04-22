<template>
  <!-- 搜索表单 -->
  <div class="table-search">
    <n-form label-placement="left" inline class="wrapper">
      <n-form-item
        v-for="(item, key) in props?.searchList"
        :label="item.label"
        :key="key"
        style="min-width:200px">
        <!-- input -->
        <n-input
          v-if="item.type === 'input'"
          size="small"
          :allow-input="noSideSpace"
          v-model:value="item.value"
          :placeholder="item.placeholder"
          clearable />
        <!-- select -->
        <n-select
          v-if="item.type === 'select'"
          size="small"
          v-model:value="item.value"
          :placeholder="item.placeholder"
          :options="item.options"
          clearable />
        <!-- time-picker -->
        <n-date-picker
          value-format="yyyy-MM-dd HH:mm:ss"
          size="small"
          v-if="item.type === 'dateTime'"
          v-model:formatted-value="item.value"
          type="datetimerange"
          clearable />
      </n-form-item>
      <template v-if="props.searchList">
        <n-form-item>
          <n-button size="small" type="info" @click="search">查询</n-button>
        </n-form-item>
        <n-form-item>
          <n-button size="small" @click="reset">清空</n-button>
        </n-form-item>
      </template>
    </n-form>
  </div>

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
  }
})

// 获取自带属性
const getProps = computed(() => omit(props, ['query', 'searchList']))

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

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
