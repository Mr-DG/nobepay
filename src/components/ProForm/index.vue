<template>
  <div class="table-search">
    <n-form label-placement="top" inline class="wrapper">
      <n-grid :x-gap="40" :y-gap="0" :cols="3">
        <template v-for="(item, key) in    props?.searchList   ">
          <n-grid-item>
            <n-form-item
              :label="item.label"
              :key="key"
              style="min-width:200px;"
              :rule="item.rule">
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
        <n-grid-item v-if="props.searchList && props.search">
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
</template>

<script setup>
import Search from '@/assets/images/icon/search.svg'

const props = defineProps({
  search: {
    type: Boolean,
    default: () => true
  },
  searchList: {
    type: Object,
    default: () => { }
  },
  formSize: {
    type: String,
    default: () => 'large'
  },
  noSideSpace: {
    type: Function,
    default: () => (value) => !value.startsWith(' ') && !value.endsWith(' ')
  }
})
const emit = defineEmits(['reset', 'search'])
const reset = () => {
  emit('reset')
}
const search = () => {
  emit('search')
}
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
</style>
