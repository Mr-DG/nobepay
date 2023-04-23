<template>
  <!-- 搜索表单 -->
  <div class="table-search">
    <n-form label-placement="top" inline class="wrapper">
      <n-grid :x-gap="40" :y-gap="0" :cols="3">
        <template v-for="(item, key) in props?.searchList">
          <n-grid-item>
            <n-form-item
              :label="item.label"
              :key="key"
              style="min-width:200px;">
              <!-- input -->
              <n-input
                v-if="item.type === 'input'"
                :size="formSize"
                :allow-input="noSideSpace"
                v-model:value="item.value"
                :placeholder="item.placeholder"
                clearable />
              <!-- select -->
              <n-select
                v-if="item.type === 'select'"
                :size="formSize"
                v-model:value="item.value"
                :placeholder="item.placeholder"
                :options="item.options"
                clearable />
              <!-- time-picker -->
              <n-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                :size="formSize"
                v-if="item.type === 'dateTime'"
                v-model:formatted-value="item.value"
                type="datetimerange"
                clearable />
            </n-form-item>
          </n-grid-item>
        </template>
        <n-grid-item v-if="props.searchList">
          <n-grid :cols="3" :x-gap="20">
            <n-grid-item :offset="1">
              <n-form-item>
                <n-button size="large" class="clearBtn" @click="reset">清空</n-button>
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item>
                <n-button
                  size="large"
                  class="searchBtn"
                  type="primary"
                  @click="search">
                  <div class="search-icon">
                    <Search />
                  </div>
                  查询
                </n-button>
              </n-form-item>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
      </n-grid>
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
import Search from '@/assets/images/icon/search.svg'

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
