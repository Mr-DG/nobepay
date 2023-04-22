export const useSearch = ({ searchParam, searchList, fetchData }) => {
  // 搜索
  const search = () => {
    console.log('搜索')
    const params = {}
    for (const key in searchList) {
      if (searchList[key].value) {
        if (searchList[key].key === 'time') {
          const [beginDate, endDate] = [...searchList[key].value]
          params.beginDate = beginDate
          params.endDate = endDate
        } else {
          params[key] = searchList[key].value
        }
      }
    }
    searchParam.value = params
    fetchData(params)
  }

  // 重置
  const reset = () => {
    for (const key in searchList) {
      searchList[key].value = null
    }
    fetchData()
  }

  // 请求input的空格
  const noSideSpace = (value) => !value.startsWith(' ') && !value.endsWith(' ')

  return {
    search,
    reset,
    noSideSpace
  }
}
