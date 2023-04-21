import { usePagination } from './usePagination'
import { useMessage } from 'naive-ui'
import { useSearch } from './useSearch'

export const useTable = (props) => {
  const message = useMessage()
  const loading = ref(false)
  const tableData = ref([])
  const checkedRowKeys = ref([])
  const searchParam = ref({})

  // 获取数据
  const fetchData = async (searchParam = {}) => {
    console.log('搜索参数')
    console.log(searchParam)
    try {
      loading.value = true
      const { data, code, msg, total } = await props.query({
        pageNum: pagination.page,
        pageSize: pagination.pageSize,
        ...searchParam
      })
      if (code === 200) {
        pagination.itemCount = total
        tableData.value = data
        loading.value = false
      } else {
        message.error(msg)
      }
    } catch (error) {
      table.loading = false
      console.error(error)
    }
  }

  // 刷新
  const refresh = () => {
    fetchData()
  }

  // 分页
  const { pagination } = usePagination({ checkedRowKeys, fetchData })

  return {
    loading,
    tableData,
    fetchData,
    refresh,
    pagination,
    ...useSearch({ searchParam, searchList: props.searchList, fetchData })
  }
}