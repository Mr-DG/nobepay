export const usePagination = ({ checkedRowKeys, fetchData }) => {
  const pagination = reactive({
    prefix: (info) => `共 ${info.itemCount} 条`,
    page: 1, //受控模式下的当前页
    pageSize: 10, // 受控模式下的分页大小
    itemCount: 1, // 总条数
    showQuickJumper: true, //快速跳转
    showSizePicker: true, //是否显示每页条数的选择器
    pageSizes: [10, 20, 30, 40],
    onUpdatePage: (page) => {
      checkedRowKeys.value = []
      pagination.page = page
      fetchData()
    },
    onUpdatePageSize: (pageSize) => {
      pagination.pageSize = pageSize
      fetchData()
    }
  })
  return { pagination }
}